import colors from 'windicss/colors'
import { varToRgba } from '../functions'

export default {
  'neutral': varToRgba('--neutral'),
  'neutral-focus': varToRgba('--neutral-focus'),
  'neutral-content': varToRgba('--neutral-content'),

  'primary': varToRgba('--primary'),
  'primary-focus': varToRgba('--primary-focus'),
  'primary-content': varToRgba('--primary-content'),

  'secondary': varToRgba('--secondary'),
  'secondary-focus': varToRgba('--secondary-focus'),
  'secondary-content': varToRgba('--secondary-content'),

  'accent': varToRgba('--accent'),
  'accent-focus': varToRgba('--accent-focus'),
  'accent-content': varToRgba('--accent-content'),

  'success': varToRgba('--success'),
  'success-focus': varToRgba('--success-focus'),
  'success-content': varToRgba('--success-content'),

  'danger': varToRgba('--danger'),
  'danger-focus': varToRgba('--danger-focus'),
  'danger-content': varToRgba('--danger-content'),

  'warning': varToRgba('--warning'),
  'warning-focus': varToRgba('--warning-focus'),
  'warning-content': varToRgba('--warning-content'),

  'base': {
    100: varToRgba('--base-100'),
    200: varToRgba('--base-200'),
    300: varToRgba('--base-300'),
    content: varToRgba('--base-content'),
  },
  'base-gray': {
    100: varToRgba('--base-gray-100'),
    200: varToRgba('--base-gray-200'),
    300: varToRgba('--base-gray-300'),
    400: varToRgba('--base-gray-400'),
    500: varToRgba('--base-gray-500'),
    600: varToRgba('--base-gray-600'),
    700: varToRgba('--base-gray-700'),
  },
  'white': colors.white,
  'black': colors.black,
}
