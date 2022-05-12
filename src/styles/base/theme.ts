import { hexToRgb } from "../functions";

export default {
  ":root": {
    "--primary-100": hexToRgb("#2563eb"),
    "--primary-200": hexToRgb("#1d4ed8"),
    "--primary-300": hexToRgb("#1e40af"),

    "--secondary-100": hexToRgb("#4b5563"),
    "--secondary-200": hexToRgb("#374151"),
    "--secondary-300": hexToRgb("#1f2937"),

    "--success-100": hexToRgb("#16a34a"),
    "--success-200": hexToRgb("#15803d"),
    "--success-300": hexToRgb("#166534"),

    "--danger-100": hexToRgb("#dc2626"),
    "--danger-200": hexToRgb("#b91c1c"),
    "--danger-300": hexToRgb("#991b1b"),

    "--warning-100": hexToRgb("#ca8a04"),
    "--warning-200": hexToRgb("#a16207"),
    "--warning-300": hexToRgb("#854d0e"),

    "--base-100": hexToRgb("#fcfcfc"),
    "--base-200": hexToRgb("#fafafa"),
    "--base-300": hexToRgb("#f8f9fa"),
    "--vuewindi-text": "31, 41, 55",
    "--rounded-box": "1rem",
    "--rounded-btn": "0.5rem",
    "--rounded-badge": "1.9rem"
  },
  ".theme-teal": {
    "--primary-100": hexToRgb("#0d9488"),
    "--primary-200": hexToRgb("#0f766e"),
    "--primary-300": hexToRgb("#115e59"),
  },
  ".theme-rose": {
    "--primary-100": hexToRgb("#e11d48"),
    "--primary-200": hexToRgb("#be123c"),
    "--primary-300": hexToRgb("#9f1239"),
    "--rounded-box": "0.5rem",
    "--rounded-btn": "0.25rem",
    "--rounded-badge": "0.25rem"
  },
  ".theme-violet": {
    "--primary-100": hexToRgb("#7c3aed"),
    "--primary-200": hexToRgb("#6d28d9"),
    "--primary-300": hexToRgb("#5b21b6"),
  },
  ".theme-orange": {
    "--primary-100": hexToRgb("#ea580c"),
    "--primary-200": hexToRgb("#c2410c"),
    "--primary-300": hexToRgb("#9a3412"),
  },
  ".dark": {
    "--base-100": hexToRgb("#181818"),
    "--base-200": hexToRgb("#151414"),
    "--base-300": hexToRgb("#0f0f0f"),
    "--vuewindi-text": "243, 244, 246",
    "color-scheme": "dark",
  },
  html: {
    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
  },

  //border color (light and dark)
  "*, ::before, ::after ": {
    "border-color": `rgb(${hexToRgb("#e5e7eb")})`,
  },
  ".dark *, ::before, ::after ": {
    "border-color": `rgb(${hexToRgb("#2d2d2d")})`,
  },
};
