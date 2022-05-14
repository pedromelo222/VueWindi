export default {
  //mobile highlight color
  html: {
    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
  },
  //border color (light and dark)
  "*, ::before, ::after ": {
    "border-color": `rgb(229 231 235)`,
  }, 
  ".dark *, ::before, ::after ": {
    "border-color": `rgb(45 45 45)`,
  },
  ".dark": {
    "color-scheme": "dark",
  }
};
