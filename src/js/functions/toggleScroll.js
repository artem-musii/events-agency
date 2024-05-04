export const toggleScroll = (config) => {
  document.body.style.overflow = config.scrollEnabled ? 'hidden' : 'auto';

  config.scrollEnabled = !config.scrollEnabled;
};
