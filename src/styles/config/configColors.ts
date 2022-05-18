import { varToRgba } from "../functions";
import colors from 'windicss/colors'

export default {
  primary: {
    100: varToRgba("--primary-100"),
    200: varToRgba("--primary-200"),
    300: varToRgba("--primary-300"),
  },
  secondary: {
    100: varToRgba("--secondary-100"),
    200: varToRgba("--secondary-200"),
    300: varToRgba("--secondary-300"),
  },
  success: {
    100: varToRgba("--success-100"),
    200: varToRgba("--success-200"),
    300: varToRgba("--success-300"),
  },
  danger: {
    100: varToRgba("--danger-100"),
    200: varToRgba("--danger-200"),
    300: varToRgba("--danger-300"),
  },
  warning: {
    100: varToRgba("--warning-100"),
    200: varToRgba("--warning-200"),
    300: varToRgba("--warning-300"),
  },
  base: {
    100: varToRgba("--base-100"),
    200: varToRgba("--base-200"),
    300: varToRgba("--base-300"),
    text: varToRgba("--base-text")
  },
  'base-gray': {
    100: varToRgba("--base-gray-100"),
    200: varToRgba("--base-gray-200"),
    300: varToRgba("--base-gray-300"),
    400: varToRgba("--base-gray-400"),
    500: varToRgba("--base-gray-500"),
    600: varToRgba("--base-gray-600"),
    700: varToRgba("--base-gray-700"),
  },
  white: colors.white,
  black: colors.black
};
