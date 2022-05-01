import colors from "windicss/colors";
import { varToRgba } from "../helper/index";

export default {
  preflight: {
    safelist: "button a",
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
  shortcuts: {  
    'wbtn': {
      '@apply':
        'font-semibold rounded-lg inline-flex items-center justify-center select-none',

      '&.wprimary': {
        '&.wdefault': {
          '@apply': 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
        },
        '&.woutline': {
          '@apply':
            'text-primary-600 hover:(bg-primary-600 text-white) border-2 border-primary-600',
        },
        '&.wtransparent': {
          '@apply': 'text-primary-600 hover:(bg-primary-600/10)',
        },
        '&.wlink': {
          '@apply': 'text-primary-600 hover:underline',
        },
      },
      '&.wsecondary': {
        '&.wdefault': {
          '@apply': 'bg-gray-600 text-white hover:bg-gray-700 shadow-sm',
        },
        '&.woutline': {
          '@apply':
            'text-gray-600 hover:(bg-gray-600 text-white) border-2 border-gray-600',
        },
        '&.wtransparent': {
          '@apply': 'text-gray-600 hover:(bg-gray-600/10)',
        },
        '&.wlink': {
          '@apply': 'text-gray-600 hover:underline',
        },
      },
      '&.wsuccess': {
        '&.wdefault': {
          '@apply': 'bg-green-600 text-white hover:bg-green-700 shadow-sm',
        },
        '&.woutline': {
          '@apply':
            'text-green-600 hover:(bg-green-600 text-white) border-2 border-green-600',
        },
        '&.wtransparent': {
          '@apply': 'text-green-600 hover:(bg-green-600/10)',
        },
        '&.wlink': {
          '@apply': 'text-green-600 hover:underline',
        },
      },
      '&.wdanger': {
        '&.wdefault': {
          '@apply': 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
        },
        '&.woutline': {
          '@apply':
            'text-red-600 hover:(bg-red-600 text-white) border-2 border-red-600',
        },
        '&.wtransparent': {
          '@apply': 'text-red-600 hover:(bg-red-600/10)',
        },
        '&.wlink': {
          '@apply': 'text-red-600 hover:underline',
        },
      },
      '&.wwarning': {
        '&.wdefault': {
          '@apply': 'bg-yellow-600 text-white hover:bg-yellow-700 shadow-sm',
        },
        '&.woutline': {
          '@apply':
            'text-yellow-600 hover:(bg-yellow-600 text-white) border-2 border-yellow-600',
        },
        '&.wtransparent': {
          '@apply': 'text-yellow-600 hover:(bg-yellow-600/10);',
        },
        '&.wlink': {
          '@apply': 'text-yellow-600 hover:underline',
        },
      },
      '&.wdisabled': {
        '@apply':
          'cursor-not-allowed pointer-events-none !bg-opacity-70 border-opacity-50 text-opacity-80',
      },
      '&.wloading': {
        '@apply': 'pointer-events-none',
      },

      '&.wpills': {
        '@apply': 'rounded-full',
      },
      '&.wxs': {
        '@apply': 'h-8  px-2 text-xs',
        '&.wcircle': {
          '@apply': 'rounded-full w-8 !p-0',
        },
      },
      '&.wsm': {
        '@apply': 'h-10  px-3 text-sm',
        '&.wcircle': {
          '@apply': 'rounded-full w-10 !p-0',
        },
      },
      '&.wmd': {
        '@apply': 'h-12 px-4 text-sm',

        '&.wcircle': {
          '@apply': 'rounded-full w-12 !p-0',
        },
      },
      '&.wlg': {
        '@apply': 'h-14 px-5 text-md',
        '&.wcircle': {
          '@apply': 'rounded-full w-14 !p-0',
        },
      },
      '&.wxl': {
        '@apply': 'h-16 px-6 text-xl',
        '&.wcircle': {
          '@apply': 'rounded-full w-16 !p-0',
        },
      },
    },
  },

};
