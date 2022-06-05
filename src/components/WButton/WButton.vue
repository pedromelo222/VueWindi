<script lang="ts">
import { type PropType, computed, defineComponent, ref } from 'vue'
import './button.css'
export default defineComponent({
  name: 'WButton',
  props: {
    tag: {
      type: String,
      default: 'button',
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
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
      required: false,
      validator: (value: string) => {
        return ['button', 'submit', 'reset'].includes(value)
      },
    },
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    size: {
      type: String,
      default: 'md',
      required: false,
      validator: (value: string) => {
        return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
      },
    },
    variant: {
      type: String,
      default: 'default',
      required: false,
      validator: (value: string) => {
        return ['default', 'outline', 'transparent', 'link'].includes(value)
      },
    },
    pills: {
      type: Boolean,
      default: false,
      required: false,
    },
    circle: {
      type: Boolean,
      default: false,
      required: false,
    },
    active: {
      type: Boolean,
      default: false,
      required: false,
    },
    // remove all styles from button
    clean: {
      type: Boolean,
      default: false,
      required: false,
    },
    // remove all styles from button
    menuItem: {
      type: Boolean,
      default: false,
      required: false,
    },
    // responsive sm
    sm: {
      type: String,
      required: false,
    },
    // responsive md
    md: {
      type: String,
      required: false,
    },
    // responsive lg
    lg: {
      type: String,
      required: false,
    },
    // responsive xl
    xl: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const computedType = computed(() => {
      if (props.tag === 'input' || props.tag === 'button')
        return props.type

      return null
    })

    const responsive = computed(() => {
      const rp = ref('w-btn-')
      if (props.sm)
        rp.value = `${rp.value}sm-${props.sm}`
      else if (props.md)
        rp.value = `${rp.value}md-${props.md}`
      else if (props.lg)
        rp.value = `${rp.value}lg-${props.lg}`
      else if (props.xl)
        rp.value = `${rp.value}xl-${props.xl}`
      else return null

      return rp.value
    })

    return { computedType, responsive }
  },
})
</script>

<template>
  <component
    :is="tag"
    :disabled="disabled || loading"
    :type="computedType"
    class="w-btn" :class="[
      `w-btn-${color}`,
      `w-btn-${variant}`,
      `w-btn-${size}`,
      responsive ?? responsive,
      {
        'w-btn-pills': pills,
        'w-btn-disabled': disabled,
        'w-btn-loading': loading,
        'w-btn-circle': circle,
        'w-btn-active': active,
        'w-btn-clean': menuItem || clean,
      },
    ]"
  >
    <svg
      v-if="loading"
      name="icon-loading"
      class="w-icon-loading"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="w-icon-circle"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="w-icon-path"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <slot />
  </component>
</template>
