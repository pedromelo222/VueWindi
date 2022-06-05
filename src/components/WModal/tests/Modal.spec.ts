import { mount } from '@vue/test-utils'
import WModal from '../WModal.vue'

describe('WModal', () => {
  it('should work with import on demand', () => {
    mount(WModal, { props: { active: false } })
  })

  it('sets isShow when active prop is changed', async () => {
    const wrapper = mount(WModal, {
      props: { active: false },
    })
    expect(wrapper.vm.isShow).toBeFalsy()
    await wrapper.setProps({ active: true })
    expect(wrapper.vm.isShow).toBeTruthy()

    wrapper.unmount()
  })

  it('modal visibility', async () => {
    const wrapper = mount(WModal, {
      props: {
        active: false,
      },
    })

    expect(wrapper.find('.w-modal-background').exists()).toBeFalsy()
    expect(wrapper.find('.w-modal-box').exists()).toBeFalsy()
    await wrapper.setProps({ active: true })
    expect(wrapper.find('.w-modal-background').exists()).toBeTruthy()
    expect(wrapper.find('.w-modal-box').exists()).toBeTruthy()
    wrapper.unmount()
  })

  it('backdrop visibility', async () => {
    const wrapper = mount(WModal, {
      props: {
        active: true,
        backdrop: false,
      },
    })

    expect(wrapper.find('.w-backdrop').isVisible()).toBeFalsy()
    await wrapper.setProps({ backdrop: true })
    expect(wrapper.find('.w-backdrop').isVisible()).toBeTruthy()
    await wrapper.setProps({ active: false })
    expect(wrapper.find('.w-backdrop').isVisible()).toBeFalsy()
    wrapper.unmount()
  })

  it('close button visibility', async () => {
    const wrapper = mount(WModal, {
      props: {
        active: true,
        closeBtn: false,
      },
    })
    expect(wrapper.find('.w-modal-btn-close').isVisible()).toBeFalsy()
    await wrapper.setProps({ closeBtn: true })
    expect(wrapper.find('.w-modal-btn-close').isVisible()).toBeTruthy()
    wrapper.unmount()
  })

  it('emit events on close btn', async () => {
    const wrapper = mount(WModal, {
      props: {

        active: true,
        closeBtn: true,
      },
    })
    await wrapper.find('.w-modal-btn-close').trigger('click')
    expect(wrapper.emitted()['update:active']).toBeTruthy()
    wrapper.unmount()
  })

  it('emit events on clickoutside', async () => {
    const wrapper = mount(WModal, {
      props: {
        active: true,
        outside: false,
      },
    })
    await wrapper.find('.w-modal-background').trigger('click')
    expect(wrapper.emitted()['update:active']).toBeFalsy()
    await wrapper.setProps({ outside: true })
    await wrapper.find('.w-modal-background').trigger('click')
    expect(wrapper.emitted()['update:active']).toBeTruthy()
    wrapper.unmount()
  })
})
