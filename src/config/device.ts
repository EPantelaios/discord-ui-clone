const size = {
  tablet: '768px',
  desktop: '1024px',
};

const deviceSize = {
  tablet: 768,
  desktop: 1024,
};

const device = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export { device, deviceSize };
