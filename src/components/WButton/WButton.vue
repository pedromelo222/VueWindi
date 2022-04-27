

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import  { WIconLoading }  from '../icons'

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
        /* Type not working */
        //  type: {
        //    type: String,
        //    default: "button",
        //    required: false,
        //      validator: (value:string)=>{
        //       return ['button', 'submit', 'reset'].includes(value)
        //     }
        //  },
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
                return ["default", "outline", "transparent"].includes(value);
            },
        },
        pills: {
            type: Boolean,
            default: false,
            required: false
        },
        
    },
    setup(props) {
        /* button default css class */
        const defaultBtnClass = "flex items-center justify-center transition duration-200 ease-in-out";
        /* button sizes */
        const wSize: {
            [key: string]: string;
        } = reactive({
            "xs": "px-2 py-1 text-xs font-medium",
            "sm": "px-4 py-2 text-sm font-medium",
            "md": "px-5 py-3 text-sm font-semibold",
            "lg": "px-6 py-4 text-sm font-semibold",
            "xl": "px-7 py-5 text-md font-semibold",
        });
        /* background colors */
        const wBgColors: {
            [key: string]: string;
        } = reactive({
            "primary": "bg-primary-600 hover:bg-primary-700",
            "secondary": "bg-gray-600 hover:bg-gray-700",
            "success": "bg-green-600 hover:bg-green-700",
            "danger": "bg-red-600 hover:bg-red-700",
            "warning": "bg-yellow-600 hover:bg-yellow-700"
        });
        /* border colors */
        const wBColors: {
            [key: string]: string;
        } = reactive({
            "primary": "border-primary-600",
            "secondary": "border-gray-600",
            "success": "border-green-600",
            "danger": "border-red-600",
            "warning": "border-yellow-600"
        });
        /* Outline colors */
        const wOutlineColors: {
            [key: string]: string;
        } = reactive({
            "primary": "text-primary-600 hover:(bg-primary-600 text-white)",
            "secondary": "text-gray-600 hover:(bg-gray-600 text-white)",
            "success": "text-green-600 hover:(bg-green-600 text-white)",
            "danger": "text-red-600 hover:(bg-red-600 text-white)",
            "warning": "text-yellow-600 hover:(bg-yellow-600 text-white)"
        });
        
        /* button variant */
        const wVariant: {
            [key: string]: string;
        } = reactive({
            "default": `${wBgColors[props.color]} text-white shadow`,
            "outline": `${wOutlineColors[props.color]} border-2 ${wBColors[props.color]} shadow`,
            'transparent': `${wOutlineColors[props.color]} `
        });
        return { defaultBtnClass, wSize, wVariant };
    },
    components: { WIconLoading }
})
</script>
<template>
  <component
  :is="tag" 
   :disabled="disabled" 
   :class="`${defaultBtnClass}
  ${wVariant[variant]} 
  ${wSize[size]} 
  ${disabled ? 'cursor-not-allowed bg-opacity-50 hover:none' : ''}
  ${pills ? 'rounded-full' : 'rounded-lg'}`">
    <WIconLoading v-show="loading"></WIconLoading>
    <slot ></slot>
  </component>
</template>