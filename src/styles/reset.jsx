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
  html: {
    colorScheme: "dark",
    "--shadow-color": "250deg 35% 11%",
    "--shadow-elevation-low": `
      0px 0.6px 0.6px hsl(var(--shadow-color) / 0.26),
      0px 0.8px 0.8px -1.6px hsl(var(--shadow-color) / 0.22),
      0px 1.8px 1.8px -3.2px hsl(var(--shadow-color) / 0.19)
    `,
    "--shadow-elevation-medium": `
      0px 0.3px 0.6px hsl(var(--shadow-color) / 0.2),
      0px 0.7px 1.4px -1.1px hsl(var(--shadow-color) / 0.19),
      0px 1.5px 3.7px -2.1px hsl(var(--shadow-color) / 0.18),
      0.1px 4px 9.2px -3.2px hsl(var(--shadow-color) / 0.17),
      0.2px 6px 15px -2.3px hsl(var(--shadow-color) / 0.16)
    `,
    "--shadow-elevation-high": `
      0px 0.6px 0.6px hsl(var(--shadow-color) / 0.26),
      0px 1.8px 1.8px -0.5px hsl(var(--shadow-color) / 0.24),
      0px 3.2px 3.3px -0.9px hsl(var(--shadow-color) / 0.23),
      0.1px 5.4px 5.5px -1.4px hsl(var(--shadow-color) / 0.21),
      0.1px 9.1px 9.3px -1.8px hsl(var(--shadow-color) / 0.2),
      0.2px 14.7px 15px -2.3px hsl(var(--shadow-color) / 0.19),
      0.3px 22.8px 23.3px -2.7px hsl(var(--shadow-color) / 0.17),
      0.4px 34.2px 34.9px -3.2px hsl(var(--shadow-color) / 0.16)
    `,
    "--color-notice": "hsl(235deg 100% 50%)",
    "--color-notice-bg": "hsl(235deg 0% 100%)",
    "--color-warning": "hsl(35deg 100% 46%)",
    "--color-warning-bg": "hsl(40deg 100% 94%)",
    "--color-success": "hsl(120deg 80% 35%)",
    "--color-success-bg": "hsl(120deg 90% 96%)",
    "--color-error": "hsl(345deg 100% 50%)",
    "--color-error-bg": "hsl(350deg 90% 96%)",
  },
});
