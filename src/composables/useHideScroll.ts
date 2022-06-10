import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const scrollbarWidth = ref<number>(0)
const isScrollHidden = ref(false)

function useHideScroll() {
  onMounted(() => {
    nextTick(() => {
      scrollbarWidth.value = window.innerWidth - document.body.scrollWidth
    })
  })

  const showScroll = () => {
    isScrollHidden.value = false
    document.body.style.overflowY = ''
    document.body.style.paddingRight = ''
  }

  const hideScroll = () => {
    isScrollHidden.value = true
    document.body.style.overflowY = 'hidden'
    if (scrollbarWidth.value > 0)
      document.body.style.paddingRight = `${scrollbarWidth.value}px`
  }

  onBeforeUnmount(() => {
    showScroll()
  })

  return { showScroll, hideScroll, isScrollHidden }
}

export { useHideScroll }
