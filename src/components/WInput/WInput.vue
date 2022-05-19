<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import "./input.css";
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
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
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
    error: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit }) {
    const inputText = ref<HTMLInputElement | null>(null);
    const isError = ref(props.error || false);
    const text = ref(props.value);
    const initialValue = ref<string>("");

    if (props.value && props.error) initialValue.value = props.value;

    const setFocus = () => {
      inputText.value?.focus();
    };

    watch(text, (value) => {
      emit("update:value", text);
      if (props.error) {
        if (initialValue.value !== text.value) {
          isError.value = false;
        } else {
          isError.value = true;
        }
      }
    });

    return { setFocus, inputText, text, isError };
  },
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
      :disabled="disabled"
      v-model="text"
      class="w-input"
      :class="[
        {
          'w-input-bordered': bordered,
          'w-input-ghost': ghost,
          'w-input-error': isError,
        },
        `w-input-${size}`,
        `w-input-${color}`,
      ]"
    />
    <div
      v-if="isError"
      v-text="error"
      class="w-input-error"
    ></div>
  </div>
</template>
