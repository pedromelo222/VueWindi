

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { WIconLoading } from '../icons'
export default defineComponent({
    name: "TButton",
    props: {
        tag: {
            type: String,
            default: "button",
            required: false
        },
        color: {
            type: String,
            default: "primary",
            validator: (value: string) => {
                return ["primary", "secondary", "success", "danger", "warning"].includes(value);
            }
        },
        type: {
            type: String as PropType<'button' | 'submit' | 'reset'>,
            default: "button",
            required: false,
            validator: (value: string) => {
                return ['button', 'submit', 'reset'].includes(value)
            }
        },
        loading: {
            type: Boolean,
            default: false,
            required: false
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
            required: false
        },
        circle: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    components: { WIconLoading }
})
</script>
<template>
    <component :is="tag" :disabled="disabled" :type="type"
    :class=" [
    '_btn',
    `_${color}`,
    `_${variant}`,
    `_${size}`,
    pills? '_pills' : '',
    disabled? '_disabled': '',
    loading? '_loading': '',
    circle? '_circle': '',]"
    
    >
    <WIconLoading v-show="loading" class="-ml-1 mr-2"></WIconLoading>
    <slot></slot>

    </component>
</template>

<style lang="css" scoped>
@import "./wbutton.css";
</style>
