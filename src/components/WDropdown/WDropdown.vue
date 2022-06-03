<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'
import { useClickOutside } from '../../composables/useClickOutside'
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
            if (!props.hover)
                isActive.value = !isActive.value;
        }
        function mouseEnter() {
            if (props.hover)
                isActive.value = true;
        }
        function mouseLeave() {
            if (props.hover)
                isActive.value = false;
        }
        useClickOutside(dropdownRef, () => {
            if (isActive.value)
                isActive.value = false
        })
        return { isActive, dropdownRef, toggle, mouseEnter, mouseLeave }
    }
})
</script>
<template>
    <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" @pointerenter="mouseEnter" ref="dropdownRef"
        class="w-dropdown">
        <div class="w-dropdown-trigger" @click="toggle">
            <slot name="trigger" :active="isActive"></slot>
        </div>
        <transition enter-active-class="w-transition-enter-active" enter-from-class="w-transition-enter-from"
            enter-to-class="w-transition-enter-to" leave-active-class="w-transition-leave-active"
            leave-from-class="w-transition-leave-from" leave-to-class="w-transition-leave-to">
            <div v-show="isActive" :class="[
                'w-dropdown-menu',
                `w-dropdown-${placement}`
            ]">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
