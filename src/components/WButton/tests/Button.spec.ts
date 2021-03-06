import { mount } from '@vue/test-utils'
import WButton from '../WButton.vue'

describe('WButton', () => {
  it('should work with import on demand', () => {
    mount(WButton)
  })

  it('render text correctly', () => {
    const text = 'Submit'
    const wrapper = mount(WButton, { slots: { default: text } })
    expect(wrapper.text()).toBe('Submit')
    wrapper.unmount()
  })

  it('clickable', async () => {
    const onClick = vi.fn()
    const wrapper = mount(WButton, { attrs: { onClick } })
    await wrapper.find('button').trigger('click')
    expect(onClick).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('disabled', async () => {
    const onClick = vi.fn()
    const wrapper = mount(WButton, {
      props: { disabled: true },
      attrs: { onClick },
    })
    await wrapper.find('button').trigger('click')
    expect(onClick).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('loading', async () => {
    const onClick = vi.fn()
    const wrapper = mount(WButton, {
      props: { loading: true },
      attrs: { onClick },
    })
    await wrapper.find('button').trigger('click')
    expect(onClick).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('click then loading', async () => {
    const onClick = vi.fn()
    const wrapper = mount(WButton, {
      attrs: { onClick },
    })
    await wrapper.find('button').trigger('click')
    expect(onClick).toHaveBeenCalled()
    await wrapper.setProps({ loading: true })
    await wrapper.find('button').trigger('click')
    expect(onClick).toHaveBeenCalledOnce()
    wrapper.unmount()
  })

  it('loading should show icon', () => {
    const wrapper = mount(WButton, {
      props: { loading: true },
      slots: { default: 'Loading' },
    })
    expect(
      wrapper.find('button').element.children[0].getAttribute('name'),
    ).toBe('icon-loading')
    wrapper.unmount()
  })

  it('should work with `color` prop', async () => {
    (['primary', 'secondary', 'success', 'warning', 'danger'] as const).forEach(
      (color) => {
        const wrapper = mount(WButton, { props: { color } })
        expect(wrapper.find('button').classes()).toContain(
          `w-btn-${color}`,
        )
        wrapper.unmount()
      },
    )
  })

  it('default and button tag should have `button` type', async () => {
    const wrapper = mount(WButton)
    expect(wrapper.vm.computedType).toBe('button')
    await wrapper.setProps({ tag: 'button' })
    expect(wrapper.vm.computedType).toBe('button')
    wrapper.unmount()
  })

  it('tag `a` should have `null` type', async () => {
    const wrapper = mount(WButton, {
      props: { tag: 'a' },
    })
    expect(wrapper.vm.computedType).toBe(null)
    wrapper.unmount()
  })
})
