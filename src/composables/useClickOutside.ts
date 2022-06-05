import { type Ref, onBeforeUnmount, onMounted, ref } from 'vue'

function useClickOutside(target: Ref, callback: (event: PointerEvent) => void) {
  if (!target)
    return

  const shouldListen = ref(true)
  let fallback: number

  const listener = ((event: PointerEvent) => {
    window.clearTimeout(fallback)

    if (event.target === target.value || event.composedPath().includes(target.value) || !shouldListen.value)
      return

    callback(event)
  }) as EventListener

  const pointerDownListener = ((event: PointerEvent) => {
    shouldListen.value = !!target.value && !event.composedPath().includes(target.value)
  }) as EventListener

  const pointerUpListener = ((event: PointerEvent) => {
    fallback = window.setTimeout(() => listener(event), 50)
  }) as EventListener

  const useEventListener = (action: 'add' | 'remove', options = {}) => {
    window[`${action}EventListener`]('click', listener, options)
    window[`${action}EventListener`]('pointerdown', pointerDownListener, options)
    window[`${action}EventListener`]('pointerup', pointerUpListener, options)
  }

  onMounted(() => {
    useEventListener('add', { passive: true })
  })

  onBeforeUnmount(() => {
    useEventListener('remove')
  })

  return { listener }
}

export { useClickOutside }
