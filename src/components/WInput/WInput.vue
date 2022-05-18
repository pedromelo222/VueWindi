<script lang="ts">
import { defineComponent, ref } from "vue";
import './input.css'
export default defineComponent({
  name: "WInput",
  props: {
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: "text",
      required: false
    },
    name: {
       type: String,
       required: false
    },
    size: {
      type: String,
      default: "md",
      required: false,
      validator: (value: string) => {
        return ["xs", "sm", "md", "lg"].includes(value);
      },
    },
    bordered: {
      type: Boolean,
      default: true,
      required: false,
    },
    ghost: {
      type: Boolean,
      default: false,
      required: false,
    },
    color: {
      type: String,
      default: "neutral",
      required: false,
      validator: (value: string) => {
        return [
          "neutral",
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
        ].includes(value);
      },
    },
  },
  setup(){
    const inputText = ref<HTMLInputElement | null>(null)
  
    const setFocus = () => {
        inputText.value?.focus();
    }

    return { setFocus, inputText }
  }
});
</script>
<template>
  <div class="w-form-control">
    <label v-if="label" class="w-label" @click="setFocus">
      <span class="w-label-text">{{ label }}</span>
    </label>

    <input
      ref="inputText"
      :name="name"
      :placeholder="placeholder"
      :type="type"  
      class="w-input"
      :class="[
        {
          'w-input-bordered': bordered,
          'w-input-ghost': ghost,
        },
        `w-input-${size}`,
        `w-input-${color}`,
      ]"
    />
  </div>
</template>