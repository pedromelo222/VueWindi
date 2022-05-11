

<script lang="ts">
import { defineComponent } from 'vue'
import './menu.css'
export default defineComponent({
  name: "WMenu",
  props: {
    compact: {
      type: [Boolean, String],
      default: false,
      required: false,
      validator: (value: boolean | string) => {
        return ["sm", "md", "lg", "xl", true, false].includes(value);
      },
    },
    horizontal: {
      type: [Boolean, String],
      default: false,
      required: false,
      validator: (value: boolean | string) => {
        return ["sm", "md", "lg", "xl", true, false].includes(value);
      },
    },
    rounded: {
      type: Boolean,
      default: false,
      required: false,
    },
    padding: {
      type: Boolean,
      default: false,
      required: false,
    },
    hoverBorder: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup(props, { slots }){    
   return {slots}    
  }
})
</script>
<template>
  <ul :class="[
    'w-menu',
    compact ? (typeof compact === 'string' ? `w-compact-${compact}` : 'w-compact') : '',
    horizontal ? (typeof horizontal === 'string' ? `w-horizontal-${horizontal}` : 'w-horizontal') : '',
    rounded ? 'w-rounded' : '',
    padding ? 'w-padding' : '',
    hoverBorder ? 'w-hover-border' : '',
  ]">
 
    <li v-for="slot in slots.default()">
      <component :is="slot" />
    </li>
  </ul>
</template>