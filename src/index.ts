const isOverflowed = (el: HTMLElement): boolean => {
  if (!el || el.clientWidth === 0) return false;
  const { clientWidth } = el;
  const cloneEl = el.cloneNode(true) as HTMLElement;
  cloneEl.style.position = 'absolute';
  cloneEl.style.top = '-9999px';
  // insert after the original element
  el.parentElement!.insertBefore(cloneEl, el.nextSibling);
  const { scrollWidth } = cloneEl;
  // remove the clone element
  el.parentElement!.removeChild(cloneEl);
  return scrollWidth > clientWidth;
};

export default isOverflowed;
