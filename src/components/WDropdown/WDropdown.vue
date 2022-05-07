<script lang="ts">
import { defineComponent, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import './dropdown.css'
export default defineComponent({
    name: "WDropdown",
    props: {
        placement: {
            type: String,
            default: 'bottom-start',
            required: false,
            validator: (value: string) => {
                return ['bottom-start', 'bottom-end', 'top-start', 'top-end'].includes(value)
            }
        },
        hover: {
            type: Boolean,
            default: false,
            required: false
        },
    },
    setup(props) {
        const dropdownRef = ref(null)
        const isActive = ref(false)

        function toggle() {
            if(!props.hover)
                isActive.value = !isActive.value;
        }
        
        function onHover() {
            if (props.hover) 
                isActive.value = !isActive.value;
            
        }
        function onFocus() {
            // if(!props.hover)
            //     toggle()            
        }

        onClickOutside(dropdownRef, () => {
            
             isActive.value = false
             
         })
        return { isActive, dropdownRef, toggle, onHover, onFocus }
    }
})
</script>
<template>
    <div @mouseleave="onHover" @mouseenter="onHover" ref="dropdownRef" class="w-dropdown">
        <div class="p-1" 
        @click="toggle"         
        @focus.capture="onFocus">
            <slot name="trigger" :active="isActive"></slot>
        </div>
        <transition enter-active-class="transition duration-150 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div :class="[
                'w-dropdown-menu',
                `w-dropdown-${placement}`
            ]" v-show="isActive">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
