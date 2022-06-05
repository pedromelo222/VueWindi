import { mount } from '@vue/test-utils'
import { h } from 'vue'
import WMenu from '../WMenu.vue'
import WButton from '../../WButton/WButton.vue'

describe('WMenu', () => {
  it('should work with import on demand', () => {
    mount(WMenu)
  })

  it('should be empty whitout slot', () => {
    const wrapper = mount(WMenu)

    expect(wrapper.findAll('.w-menu-item').length).toBe(0)
    wrapper.unmount()
  })

  it('should have default slots', () => {
    const wButton = h(WButton)
    const wrapper = mount(WMenu, {
      slots: {
        default: [{ render: () => wButton }, { render: () => wButton }],
      },
    })

    expect(wrapper.findAll('.w-menu-item').length).toBe(2)
    wrapper.unmount()
  })

  it('should menu work with `horizontal` props', async () => {
    const wrapper = mount(WMenu, { props: { horizontal: true } })

    expect(wrapper.find('.w-horizontal').exists()).toBe(true)
    await wrapper.setProps({ horizontal: 'sm' })
    expect(wrapper.find('.w-horizontal-sm').exists()).toBe(true)
    await wrapper.setProps({ horizontal: 'md' })
    expect(wrapper.find('.w-horizontal-md').exists()).toBe(true)
    await wrapper.setProps({ horizontal: 'lg' })
    expect(wrapper.find('.w-horizontal-lg').exists()).toBe(true)
    await wrapper.setProps({ horizontal: 'xl' })
    expect(wrapper.find('.w-horizontal-xl').exists()).toBe(true)
    wrapper.unmount()
  })

  it('should menu work with `compact` props', async () => {
    const wrapper = mount(WMenu, { props: { compact: true } })

    expect(wrapper.find('.w-compact').exists()).toBe(true)
    await wrapper.setProps({ compact: 'sm' })
    expect(wrapper.find('.w-compact-sm').exists()).toBe(true)
    await wrapper.setProps({ compact: 'md' })
    expect(wrapper.find('.w-compact-md').exists()).toBe(true)
    await wrapper.setProps({ compact: 'lg' })
    expect(wrapper.find('.w-compact-lg').exists()).toBe(true)
    await wrapper.setProps({ compact: 'xl' })
    expect(wrapper.find('.w-compact-xl').exists()).toBe(true)
    wrapper.unmount()
  })
})
