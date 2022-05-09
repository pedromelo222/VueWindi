import { hexToRgb } from "../functions"

export default {
    ":root": {
      "--primary-50":  hexToRgb("#f0fdfa"),
      "--primary-100": hexToRgb("#ccfbf1"),
      "--primary-200": hexToRgb("#99f6e4"),
      "--primary-300": hexToRgb("#5eead4"),
      "--primary-400": hexToRgb("#2dd4bf"),
      "--primary-500": hexToRgb("#14b8a6"),
      "--primary-600": hexToRgb("#0d9488"),
      "--primary-700": hexToRgb("#0f766e"),
      "--primary-800": hexToRgb("#115e59"),
      "--primary-900": hexToRgb("#134e4a"),
      "--base-100": hexToRgb("#fcfcfc"),
      "--base-200": hexToRgb("#fafafa"),
      "--base-300": hexToRgb("#f8f9fa"),
      "--vuewindi-text": "31, 41, 55",
    },
    ".color-blue": {
      "--primary-50":  hexToRgb("#eff6ff"),
      "--primary-100": hexToRgb("#dbeafe"),
      "--primary-200": hexToRgb("#bfdbfe"),
      "--primary-300": hexToRgb("#93c5fd"),
      "--primary-400": hexToRgb("#60a5fa"),
      "--primary-500": hexToRgb("#3b82f6"),
      "--primary-600": hexToRgb("#2563eb"),
      "--primary-700": hexToRgb("#1d4ed8"),
      "--primary-800": hexToRgb("#1e40af"),
      "--primary-900": hexToRgb("#1e3a8a"),
    },
    ".color-rose": {
      "--primary-50":  hexToRgb("#fff1f2"),
      "--primary-100": hexToRgb("#ffe4e6"),
      "--primary-200": hexToRgb("#fecdd3"),
      "--primary-300": hexToRgb("#fda4af"),
      "--primary-400": hexToRgb("#fb7185"),
      "--primary-500": hexToRgb("#f43f5e"),
      "--primary-600": hexToRgb("#e11d48"),
      "--primary-700": hexToRgb("#be123c"),
      "--primary-800": hexToRgb("#9f1239"),
      "--primary-900": hexToRgb("#881337"),
    },
    ".color-violet": {
      "--primary-50":  hexToRgb("#f5f3ff"),
      "--primary-100": hexToRgb("#ede9fe"),
      "--primary-200": hexToRgb("#ddd6fe"),
      "--primary-300": hexToRgb("#c4b5fd"),
      "--primary-400": hexToRgb("#a78bfa"),
      "--primary-500": hexToRgb("#8b5cf6"),
      "--primary-600": hexToRgb("#7c3aed"),
      "--primary-700": hexToRgb("#6d28d9"),
      "--primary-800": hexToRgb("#5b21b6"),
      "--primary-900": hexToRgb("#4c1d95"),
    },
    ".color-orange": {
      "--primary-50":  hexToRgb("#fff7ed"),
      "--primary-100": hexToRgb("#ffedd5"),
      "--primary-200": hexToRgb("#fed7aa"),
      "--primary-300": hexToRgb("#fdba74"),
      "--primary-400": hexToRgb("#fb923c"),
      "--primary-500": hexToRgb("#f97316"),
      "--primary-600": hexToRgb("#ea580c"),
      "--primary-700": hexToRgb("#c2410c"),
      "--primary-800": hexToRgb("#9a3412"),
      "--primary-900": hexToRgb("#7c2d12"),
    },
    ".dark": {
      "--base-100": hexToRgb("#181818"),
      "--base-200": hexToRgb("#151414"),
      "--base-300": hexToRgb("#0f0f0f"),
      "--vuewindi-text": "243, 244, 246",   
      "color-scheme": "dark"
    },
    "html": {
      "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"
     },
     
    //border color (light and dark)
    "*, ::before, ::after ": {
        "border-color": `rgb(${hexToRgb("#e5e7eb")})`
    },
    ".dark *, ::before, ::after ": {
      "border-color":  `rgb(${hexToRgb("#2d2d2d")})` 
    }
    
  }
  