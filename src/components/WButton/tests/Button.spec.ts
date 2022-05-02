import { mount } from "@vue/test-utils";
import WButton from "../WButton.vue";

describe("WButton", () => {
  it("should work with import on demand", () => {
    mount(WButton);
  });

  it("render text correctly", () => {
    const text = "Submit";
    const wrapper = mount(WButton, {
      slots: { default: text },
    });
    expect(wrapper.text()).toBe("Submit");
    wrapper.unmount()
  });

  /*
    Function for test click event no workin on vitest
  */
  // it("emit a click event", async () => {
  //   const onClick = vi.fn();
  //   const wrapper = mount(WButton, { attrs: { onClick: onClick } });
  //   await wrapper.find("button").trigger("click");
  //   expect(onClick).toHaveBeenCalled();
  //   wrapper.unmount();
  // });

  it('loading should show icon', () => {

    const wrapper = mount(WButton, {
        props: {
            loading: true
        },
        slots: {
          default: 'Loading'
        }
    })
    expect(wrapper.find("button").element.children[0].getAttribute("name")).toBe('icon-loading')    
    wrapper.unmount()
})

});
