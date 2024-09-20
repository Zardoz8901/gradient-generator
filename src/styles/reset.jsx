import { globalCss } from "@pigment-css/react";

export const globalReset = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
  },
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  body: {
    lineHeight: 1.5,
    WebkitFontSmoothing: "antialiased",
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input, button, textarea, select": {
    font: "inherit",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
    margin: 0,
  },
  "#root, #__next": {
    isolation: "isolate",
  },
});
