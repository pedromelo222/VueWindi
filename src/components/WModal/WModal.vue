<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue'
import { useHideScroll } from '../../composables/useHideScroll'
import './modal.css'
export default defineComponent({
  name: 'WModal',
  props: {
    // use v-model:active for two way binding
    active: {
      type: Boolean,
      required: true,
    },
    size: {
      type: String,
      default: 'sm',
      required: false,
      validator: (value: string) => {
        return ['sm', 'md', 'lg'].includes(value)
      },
    },
    // show backdrop
    backdrop: {
      type: Boolean,
      default: true,
      required: false,
    },
    // click outside to close
    outside: {
      type: Boolean,
      default: true,
      required: false,
    },
    // Apply windiCSS backdrop classes https://windicss.org/utilities/filters/backdrop-filter.html
    backdropClass: {
      type: String,
      default: 'backdrop-brightness-60',
      required: false,
    },
    // btn for close modal
    closeBtn: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: ['update:active', 'close'],
  setup(props, { emit }) {
    const isShow = ref(props.active)

    const { showScroll, hideScroll } = useHideScroll()

    onMounted(() => {
      nextTick(() => {
        // check if props.active is true before getting scroll width (parent component :active="true")
        if (props.active)
          hideScroll()
      })
    })
    function dismiss() {
      emit('update:active', false)
    }
    // this function clickOutside() is not necessary since div is set to `pointer-events-none`
    function clickOutside() {
      if (props.outside)
        emit('update:active', false)
    }

    watch(() => props.active, async () => {
      if (props.active) {
        isShow.value = true
        hideScroll()
      }
      else {
        isShow.value = false
        setTimeout(() => {
          showScroll()
        }, 250)
      }
    },
    )

    return { isShow, dismiss, clickOutside }
  },
})
</script>

<template>
  <transition name="w-modal-fade" appear>
    <div
      v-show="isShow && backdrop"
      class="w-backdrop"
      :class="backdropClass"
    />
  </transition>
  <transition name="w-modal-bounce" appear>
    <div
      v-if="isShow"
      class="w-modal-background"
      :class="[{ 'w-modal-outside': !outside }]"
      @click.self="clickOutside"
    >
      <div class="w-modal-box" :class="[`w-modal-${size}`]">
        <button
          v-show="closeBtn"
          class="w-modal-btn-close w-btn"
          @click="dismiss"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <path
              d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div class="w-modal-inner-box" :class="[`w-modal-${size}`]">
          <h2 v-show="$slots.header" class="w-modal-header">
            <slot name="header" />
          </h2>
          <div v-show="$slots.body" class="w-modal-body">
            <slot name="body" />
          </div>
          <div v-show="$slots.footer" class="w-modal-footer">
            <slot name="footer" :dismiss="dismiss" />
          </div>
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
