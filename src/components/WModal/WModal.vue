<script lang="ts">
import { defineComponent, ref, onBeforeUnmount, watch, onBeforeMount, nextTick } from "vue";
import './modal.css'
export default defineComponent({
    name: "WModal",
    emits: ['update:active', 'close'],
    props: {
        //use v-model:active for two way binding
        active: {
            type: Boolean,
            required: true
        },
        size: {
            type: String,
            default: "sm",
            required: false,
            validator: (value: string) => {
                return ["sm", "md", "lg"].includes(value);
            }
        },
        //show backdrop
        backdrop: {
            type: Boolean,
            default: true,
            required: false
        },
        //click outside to close
        outside: {
            type: Boolean,
            default: true,
            required: false
        },
        //Apply windiCSS backdrop classes https://windicss.org/utilities/filters/backdrop-filter.html
        backdropClass: {
            type: String,
            default: 'backdrop-brightness-60',
            required: false
        }
    },
    setup(props, { emit }) {
        const isShow = ref(props.active);
        const scrollbarWidth = ref<number>(0);

        getScrollbarWidth()

        function getScrollbarWidth() {
            //get width of scrollbar
            nextTick(() => {
                scrollbarWidth.value = window.innerWidth - document.body.scrollWidth
                //check if props.active is true before getting scroll width (parent component :active="true")
                if (props.active)
                    hideScroll()
            })
        }
        function showScroll() {
            setTimeout(() => {
                document.body.style.overflowY = "";
                document.body.style.paddingRight = "";
            }, 300);
        }
        function hideScroll() {
            //function to hide scrollbar (mobile devices have scrollbarWidth < 0)
            document.body.style.overflowY = "hidden";
            if (scrollbarWidth.value > 0) {
                document.body.style.paddingRight = `${scrollbarWidth.value}px`;
            }
        }
        function dismiss() {
            emit('update:active', false)
        }
        //this function clickOutside() is not necessary since div is set to `pointer-events-none`
        function clickOutside() {
            if (props.outside)
                emit('update:active', false)
        }

        watch(() => props.active, async () => {
            if (props.active) {
                isShow.value = true;
                hideScroll();
            } else {
                isShow.value = false;
                showScroll()
            }
        })

        onBeforeUnmount(() => {
            showScroll()
        })

        return { isShow, dismiss, clickOutside }
    }
})
</script>
<template>
    <transition name="w-modal-fade" appear>
        <div v-show="isShow && backdrop" class="fixed inset-0 z-40 flex  place-content-center h-screen 
                backdrop-filter" :class="backdropClass">
        </div>
    </transition>
    <transition name="w-modal-bounce" appear>
        <div v-if="isShow" @click.self="clickOutside" class=" fixed inset-0  z-50 flex place-content-center h-full"
            :class="[outside ? '' : 'pointer-events-none']">
            <div class="pointer-events-auto w-modal-box bg-base-100  m-auto  w-full mx-4 border-radius rounded-$rounded-box shadow-xl overflow-hidden"
                :class="[`w-modal-${size}`]">
                <div class="overflow-auto w-modal-inner-box block" :class="[`w-modal-${size}`]">
                    <h2 v-show="$slots.header" class="font-semibold text-lg px-6 pt-6">
                        <slot name="header"></slot>
                    </h2>
                    <div v-show="$slots.body" class="px-6 py-4">
                        <slot name="body"></slot>
                    </div>
                    <div v-show="$slots.footer" class="px-6 pb-6 flex justify-end mt-1.5">
                        <slot name="footer" :dismiss="dismiss"></slot>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>