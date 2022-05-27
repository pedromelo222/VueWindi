import { ref, nextTick, onMounted, onBeforeUnmount } from "vue";

const scrollbarWidth = ref<number>(0);

const useHideScroll = () => {

  onMounted(() => {
    nextTick(() => {
      scrollbarWidth.value = window.innerWidth - document.body.scrollWidth;     
    });
  });

  const showScroll = () => {
    setTimeout(() => {
      document.body.style.overflowY = "";
      document.body.style.paddingRight = "";
    }, 300);
  };

  const hideScroll = () => {
    //function to hide scrollbar (mobile devices have scrollbarWidth < 0)
    document.body.style.overflowY = "hidden";
    if (scrollbarWidth.value > 0) {
      document.body.style.paddingRight = `${scrollbarWidth.value}px`;
    }
  };

  onBeforeUnmount(() => {
    showScroll();
  });

  return { showScroll, hideScroll };
};

export { useHideScroll };
