import colors from "windicss/colors";
import { varToRgba } from "../helper/index";

export default {
  preflight: {
    safelist: "button",
  },
  theme: {
    colors: {
      primary: {
        50: varToRgba("--color-primary-50"),
        100: varToRgba("--color-primary-100"),
        200: varToRgba("--color-primary-200"),
        300: varToRgba("--color-primary-300"),
        400: varToRgba("--color-primary-400"),
        500: varToRgba("--color-primary-500"),
        600: varToRgba("--color-primary-600"),
        700: varToRgba("--color-primary-700"),
        800: varToRgba("--color-primary-800"),
        900: varToRgba("--color-primary-900"),
      },
      vuewindi: {
        bg: varToRgba("--vuewindi-bg"),
        bc: varToRgba("--vuewindi-bc"),
        text: varToRgba("--vuewindi-text"),
      },
    },
    extend: {
      colors: {
        teal: colors.teal,
        blue: colors.sky,
        rose: colors.rose,
        violet: colors.violet,
        orange: colors.orange,
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
        dark: colors.dark,
        light: colors.light,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
      },
    },
  },
};
