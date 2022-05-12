<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'
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
        function mouseEnter(){          
              if (props.hover) 
                isActive.value = true;     
        }
        function mouseLeave(){
             if (props.hover) 
                isActive.value = false;   
        }   
        onClickOutside(dropdownRef, () => { 
            if(isActive.value)
                   isActive.value = false   
         })
        return { isActive, dropdownRef, toggle, mouseEnter, mouseLeave }
    }
})
</script>
<template>
    <div 
    @mouseenter="mouseEnter" 
    @mouseleave="mouseLeave" 
    @pointerenter="mouseEnter"    
    ref="dropdownRef" class="w-dropdown">
        <div class="w-dropdown-trigger" 
        @click="toggle" >
            <slot name="trigger" :active="isActive"></slot>
        </div>
        <transition enter-active-class="transition duration-150 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div 
             v-show="isActive"
             :class="[
                'w-dropdown-menu p-1',
                `w-dropdown-${placement}`
            ]">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
