import { mount } from "@vue/test-utils";
import WDropdown from "../WDropdown.vue";
import { defineComponent, h } from "vue";
import WButton from "../../WButton/WButton.vue";

describe("WDropdown", () => {
  it("should work with import on demand", () => {
    mount(WDropdown);
  });

  it("clickable with any trigger element", async () => {
    const wButton = h(WButton);
    const onClick = vi.fn();
    const wrapper = mount(WDropdown, {
      slots: {
        trigger: [{ render: () => wButton }, "<span>Text</span>"],
      },
      attrs: { onClick: onClick },
    });

    await wrapper.find(".w-dropdown-trigger").trigger("click");
    await wrapper.find("span").trigger("click");
    await wrapper.find("button").trigger("click");
    expect(onClick).toHaveBeenCalledTimes(3);

    wrapper.unmount();
  });

  it("clickable with any trigger element", async () => {
    const wButton = h(WButton);
    const onClick = vi.fn();
    const wrapper = mount(WDropdown, {
      slots: {
        trigger: [{ render: () => wButton }, "<span>Text</span>"],
      },
      attrs: { onClick: onClick },
    });
    await wrapper.find(".w-dropdown-trigger").trigger("click");
    await wrapper.find("span").trigger("click");
    await wrapper.find("button").trigger("click");
    expect(onClick).toHaveBeenCalledTimes(3);

    wrapper.unmount();
  });

  it("should hide on second click", async () => {
    const wButton = h(WButton);
    const wrapper = mount(WDropdown, {
      slots: {
        trigger: { render: () => wButton },
      },
    });

    await wrapper.find(".w-dropdown-trigger").trigger("click");
    expect(wrapper.find(".w-dropdown-menu").isVisible()).toBe(true);
    expect(wrapper.vm.isActive).toBe(true);
    //second click should hide dropdown menu
    await wrapper.find(".w-dropdown-trigger").trigger("click");
    expect(wrapper.find(".w-dropdown-menu").isVisible()).toBe(false);
    expect(wrapper.vm.isActive).toBe(false);

    wrapper.unmount();
  });

  const App = defineComponent({
    components: {
      WDropdown,
    },
    template: `
    <div><button>Outside</button></div>
    <div><WDropdown/></div>`,
  });

  it("dropdown click outside", async () => {
    const wrapper = mount(App, {
      attachTo: document.body,
    });

    await wrapper.find(".w-dropdown-trigger").trigger("click");
    expect(wrapper.find(".w-dropdown-menu").isVisible()).toBe(true);
    await wrapper.find("button").trigger("click");
    expect(wrapper.find(".w-dropdown-menu").isVisible()).toBe(false);
  });

  it("hoverable with any trigger element", async () => {
    const wButton = h(WButton, { slots: { default: "Button click" } });
    const wrapper = mount(WDropdown, {
      props: { hover: true },
      slots: {
        trigger: { render: () => wButton },
      },
    });
    expect(wrapper.vm.isActive).toBe(false);
    expect(wrapper.find(".w-dropdown-menu").isVisible()).toBe(false);
    await wrapper.find(".w-dropdown").trigger("mouseenter");
    expect(wrapper.find(".w-dropdown-menu").isVisible()).toBe(true);
    expect(wrapper.vm.isActive).toBe(true);
    await wrapper.find(".w-dropdown").trigger("mouseleave");
    expect(wrapper.find(".w-dropdown-menu").isVisible()).toBe(false);
    expect(wrapper.vm.isActive).toBe(false);

    wrapper.unmount();
  });
});
