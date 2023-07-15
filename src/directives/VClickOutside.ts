export default {
  mounted(el: HTMLElement, { value }: { value: () => void }) {
    document.addEventListener('click', (e) => {
      if (!el.contains(e.target as Node)) {
        value();
      }
    });
  },
};
