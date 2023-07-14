export default {
  mounted(el: HTMLElement, { value }: { value: () => void }) {
    const options = {
      rootMargin: '0px',
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        value();
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};
