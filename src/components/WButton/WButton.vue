<script lang="ts">
import { defineComponent, type PropType, computed } from "vue";
import { WIconLoading } from "../icons";
import "./button.css";
export default defineComponent({
  name: "WButton",
  props: {
    tag: {
      type: String,
      default: "button",
      required: false,
    },
    color: {
      type: String,
      default: "primary",
      validator: (value: string) => {
        return [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
        ].includes(value);
      },
    },
    type: {
      type: String as PropType<"button" | "submit" | "reset">,
      default: "button",
      required: false,
      validator: (value: string) => {
        return ["button", "submit", "reset"].includes(value);
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
      default: "md",
      required: false,
      validator: (value: string) => {
        return ["xs", "sm", "md", "lg", "xl"].includes(value);
      },
    },
    variant: {
      type: String,
      default: "default",
      required: false,
      validator: (value: string) => {
        return ["default", "outline", "transparent", "link"].includes(value);
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
    //remove all styles from button
    clean: {
      type: Boolean,
      default: false,
      required: false,
    },
    //remove all styles from button
    menuItem: {
      type: Boolean,
      default: false,
      required: false,
    },
    
  },
  setup(props) {
    const computedType = computed(() => {
      if (props.tag === "input" || props.tag === "button") {
        return props.type;
      }
      return null;
    });

    return { computedType };
  },
  components: { WIconLoading },
});
</script>
<template>
  <component
    :is="tag"
    :disabled="disabled || loading"
    :type="computedType"
    :class="[
      'w-btn',
      `w-btn-${color}`,
      `w-btn-${variant}`,
      `w-btn-${size}`,
      pills ? 'w-btn-pills' : '',
      disabled ? 'w-btn-disabled' : '',
      loading ? 'w-btn-loading' : '',
      circle ? 'w-btn-circle' : '',
      active ? 'w-btn-active' : '',
      menuItem || clean ? 'w-btn-clean' : '',
    ]"
  >
    <WIconLoading v-if="loading" class="-ml-1 mr-2"></WIconLoading>
    <slot></slot>
  </component>
</template>
