import { defineConfig } from "windicss/helpers";
import wConfig from "./src/assets/wConfig";

export default defineConfig({
  darkMode: "class", // or 'media' ,
  attributify: true,

  presets: [wConfig],

  vueWindi: {
    themes: [
      {
        "primary-100": "#2563eb",
        "primary-200": "#1d4ed8",
        "primary-300": "#1e40af"
      },
      "blue",
      "teal",
      "rose",
      "violet",
      "orange",
    ],
  },
});
