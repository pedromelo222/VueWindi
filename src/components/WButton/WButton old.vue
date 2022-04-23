

<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent ({
  name: "WButton",

  props: {
    type: {
      type: String,
      default: "primary",
    },

    nativeType: {
      type: String,
      default: "submit",
    },

    loading: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    block: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String,
      default: "base", //extra-small, small, base, large, extra-large
    },

     pills: {
      type: Boolean,
      default: false, //rounded-full buttons
    },

    alternative: {
      type: Boolean,
      default: false
    },
  },
})
</script>
<template>
  <button
    :disabled="loading || disabled"
    class="flex items-center justify-center font-semibold text-sm text-primaryTextButton transition duration-300 ease-in-out transform  focus:outline-none focus:ring focus:ring-primary-500 shadow"
    :class="{
      [`btn-${type}`]: true,    
      'btn-block': block,
      'rounded-lg': !pills,
      'rounded-full': pills,
      'px-3 py-1 text-xs font-medium': size == 'extra-small',
      'px-4 py-2 text-sm font-medium': size == 'small',
      'px-5 py-3': size == 'base',
      'px-6 py-4': size == 'large',
      'bg-primary-400 hover:bg-primary-400 cursor-not-allowed  ': disabled,
      'cursor-not-allowed bg-primary-800 hover:bg-primary-800': loading,
      'bg-primaryButton  hover:bg-primaryButtonHover': !loading && !disabled
    }"
  >
    <svg
      v-show="loading"
      class="animate-spin -ml-1 mr-3 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <slot class="transition duration-300 ease-in-out transform" />
  </button>
</template>