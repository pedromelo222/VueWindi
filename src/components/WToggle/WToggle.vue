<script lang="ts">
import { defineComponent } from 'vue'
import './toggle.css'
export default defineComponent({
  name: 'WToggle',
  props: {
    checked: {
      type: Boolean,
      default: false,
      required: false,
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value: string) => {
        return [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
        ].includes(value)
      },
    },
    size: {
      type: String,
      default: 'md',
      required: false,
      validator: (value: string) => {
        return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
      },
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
})
</script>

<template>
  <input
    type="checkbox"
    :checked="checked"
    :disabled="disabled"
    class="peer w-toggle" :class="[`w-toggle-${color}`, `w-toggle-${size}`]"
  >
</template>
