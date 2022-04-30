

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { WIconLoading } from '../icons'

interface wSize {
    [key: string]: string;
}

interface wCircle {
    [key: string]: string;
}

interface wVariant {
    [key: string]: {
        [key: string]: string
    }
}

export default defineComponent({
    name: "WButton",
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
    setup(props) {

        const defaultBtnClass = "inline-flex items-center justify-center transition duration-200 ease-in-out";

        const wSize: wSize = {
            xs: "h-6 px-1 text-xs font-medium",
            sm: "h-8 px-3 text-sm font-medium",
            md: "h-12 px-4 text-sm font-semibold",
            lg: "h-16 px-5 text-md font-semibold",
            xl: "h-20 px-6 text-lg font-semibold",
        };

        const wCircle: wCircle = {
            xs: "w-6 !p-0",
            sm: "w-8 !p-0",
            md: "w-12 !p-0",
            lg: "w-16 !p-0",
            xl: "w-20 !p-0",
        }
        
        const wVariant: wVariant = {
            default: {
                primary: "bg-primary-600 text-white hover:bg-primary-700 shadow",
                secondary: "bg-gray-600 text-white hover:bg-gray-700 shadow",
                success: "bg-green-600 text-white hover:bg-green-700 shadow",
                danger: "bg-red-600 text-white hover:bg-red-700 shadow",
                warning: "bg-yellow-600 text-white hover:bg-yellow-700 shadow"
            },
            outline: {
                primary: "text-primary-600 hover:(bg-primary-600 text-white) border-2 border-primary-600",
                secondary: "text-gray-600 hover:(bg-gray-600 text-white) border-2 border-gray-600",
                success: "text-green-600 hover:(bg-green-600 text-white) border-2 border-green-600",
                danger: "text-red-600 hover:(bg-red-600 text-white) border-2 border-red-600",
                warning: "text-yellow-600 hover:(bg-yellow-600 text-white) border-2 border-yellow-600"
            },
            transparent: {
                primary: "text-primary-600 hover:(bg-primary-600/10)",
                secondary: "text-gray-600 hover:(bg-gray-600/10)",
                success: "text-green-600 hover:(bg-green-600/10)",
                danger: "text-red-600 hover:(bg-red-600/10)",
                warning: "text-yellow-600 hover:(bg-yellow-600/10)"
            },
            link: {
                primary: "text-primary-600 hover:underline",
                secondary: "text-gray-600 hover:underline",
                success: "text-green-600 hover:underline",
                danger: "text-red-600 hover:underline",
                warning: "text-yellow-600 hover:underline"
            },
        };

        return { defaultBtnClass, wSize, wCircle, wVariant };
    },
    components: { WIconLoading }
})
</script>
<template>
    <component
    :class="[
        defaultBtnClass,
        wSize[size],
        wVariant[variant][color],
        pills || circle ? 'rounded-full' : 'rounded-lg',
        disabled ? 'cursor-not-allowed pointer-events-none bg-opacity-70 border-opacity-50 text-opacity-50' : '',
        loading ? 'pointer-events-none' : '',
        circle? wCircle[size] : ''       
    ]" :is="tag" :disabled="disabled" :type="type" >
        <WIconLoading v-show="loading" class="-ml-1 mr-2"></WIconLoading>
        <slot></slot>
    </component>
</template>