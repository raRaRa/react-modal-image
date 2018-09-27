import React, { Component } from "react";
import { render } from "react-dom";

import ModalImage, { Lightbox } from "../../src";

class Demo extends Component {
  state = {
    isLightboxOpen: false
  };

  openLigthbox = () => {
    this.setState({
      isLightboxOpen: true,
    })
  }

  closeLigthbox = () => {
    this.setState({
      isLightboxOpen: false,
    })
  }

  render() {
    return (
      <div>
        <h1>react-modal-image</h1>

        <h2>#1 with alt, small, medium and large props</h2>

        <div style={{ maxWidth: "400px" }}>
          <ModalImage
            alt="Here is the caption"
            small="example_img_small.jpg"
            medium="example_img_medium.jpg"
            large="example_img_large.jpg"
          />
        </div>
        <p>^ click or inspect the image above</p>

        <h2>#2 with small and large props defined only</h2>

        <div style={{ maxWidth: "400px" }}>
          <ModalImage
            small="example_img_small.jpg"
            large="example_img_large.jpg"
          />
        </div>
        <p>^ click or inspect the image above</p>

        <h2>#3 with small and medium props defined only</h2>

        <div style={{ maxWidth: "400px" }}>
          <ModalImage
            small="example_img_small.jpg"
            medium="example_img_medium.jpg"
          />
        </div>
        <p>^ click or inspect the image above</p>

        <h2>#4 with download and zoom -buttons hidden</h2>

        <div style={{ maxWidth: "400px" }}>
          <ModalImage
            small="example_img_small.jpg"
            large="example_img_large.jpg"
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <p>^ click or inspect the image above</p>

        <h2>#5 with video</h2>

        <div style={{ maxWidth: "400px" }}>
          <ModalImage
            alt="Random dog video from imgur"
            medium="video.mp4"
            loop
            autoPlay
          />
        </div>
        <p>^ click or inspect the image above</p>

        <h2>#6 Component API</h2>
        {
          this.state.isLightboxOpen &&
          <Lightbox
            small="example_img_small.jpg"
            large="example_img_large.jpg"
            alt="Hello World!"
            onClose={this.closeLigthbox}
          />

        }
        <button
          onClick={this.openLigthbox}
        >
          Open lightbox
        </button>
        <p>^ click on the button to open the Lightbox</p>

        <h2>Further info</h2>
        <p>
          <a href="https://github.com/aautio/react-modal-image">GitHub</a>
        </p>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
