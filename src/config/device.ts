const size = {
  tablet: '768px',
  desktop: '1024px',

  maxWidthContentTablet: '820px',
  maxWidthContentDesktop: '1260px',
};

const deviceSize = {
  tablet: 768,
  desktop: 1024,

  maxWidthContentTablet: 820,
  maxWidthContentDesktop: 1260,
};

const device = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,

  maxWidthContentTablet: `(min-width: ${size.maxWidthContentTablet})`,
  maxWidthContentDesktop: `(min-width: ${size.maxWidthContentDesktop})`,
};

export { size, device, deviceSize };
