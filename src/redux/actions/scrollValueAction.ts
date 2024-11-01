let scrollY = 0;

const handleScroll = () => {
  scrollY = window.scrollY;
};

const updateScrollY = () => {
  window.addEventListener("scroll", handleScroll);
  return scrollY;
};

export const scrollValueAction = { updateScrollY };
