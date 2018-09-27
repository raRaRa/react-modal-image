export const isVideoFile = (src) =>
    src && src.toLowerCase().endsWith('.mp4') ||
    src && src.toLowerCase().endsWith('.mov')
