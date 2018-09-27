import React, { Component } from "react";

import { smallImage } from "./styles";
import Lightbox from "./Lightbox";
import { isVideoFile } from "./MediaHelpers";

export { default as Lightbox } from "./Lightbox";

export default class extends Component {
  state = { modalOpen: false };

  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  };

  render() {
    const {
      className,
      small,
      smallSrcSet,
      medium,
      large,
      alt,
      hideDownload,
      hideZoom,
      loop,
      autoPlay,
    } = this.props;
    const { modalOpen } = this.state;
    const isVideo = isVideoFile(large || medium)

    return (
      <div>
        {isVideo ?
          <video
            className={className}
            style={smallImage}
            onClick={this.toggleModal}
            src={small || medium}
            alt={alt}
            loop={loop !== undefined}
            autoPlay={autoPlay !== undefined}
          />
          :
          <img
            className={className}
            style={smallImage}
            onClick={this.toggleModal}
            src={small}
            srcSet={smallSrcSet}
            alt={alt}
          />
        }
        {modalOpen && (
          <Lightbox
            medium={medium}
            large={large}
            alt={alt}
            onClose={this.toggleModal}
            hideDownload={hideDownload}
            hideZoom={hideZoom}
            loop={loop !== undefined}
            autoPlay={autoPlay !== undefined}
          />
        )}
      </div>
    );
  }
}
