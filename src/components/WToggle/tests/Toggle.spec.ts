import { mount } from '@vue/test-utils'
import WToggle from '../WToggle.vue'

describe('WToggle', () => {
  it('should work with import on demand', () => {
    mount(WToggle)
  })

  it('clickable', async () => {
    const onClick = vi.fn()
    const wrapper = mount(WToggle, { attrs: { onClick } })
    await wrapper.find('input').trigger('click')
    expect(onClick).toHaveBeenCalled()
    expect(wrapper.find('input').element.checked).toBeTruthy()
    wrapper.unmount()
  })

  it('disabled', async () => {
    const onClick = vi.fn()
    const wrapper = mount(WToggle, {
      attrs: { onClick },
      props: { disabled: true },
    })
    await wrapper.find('input').trigger('click')
    expect(onClick).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('should work with `color` prop', async () => {
    (['primary', 'secondary', 'success', 'warning', 'danger'] as const).forEach(
      (color) => {
        const wrapper = mount(WToggle, { props: { color } })
        expect(wrapper.find('input').classes()).toContain(
          `w-toggle-${color}`,
        )
        wrapper.unmount()
      },
    )
  })

  it('should work with `size` prop', async () => {
    (['xs', 'sm', 'md', 'lg'] as const).forEach(
      (size) => {
        const wrapper = mount(WToggle, { props: { size } })
        expect(wrapper.find('input').classes()).toContain(
          `w-toggle-${size}`,
        )
        wrapper.unmount()
      },
    )
  })
})
