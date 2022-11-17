const size = {
  tablet: '768px',
  desktop: '1024px',
  maxWidthContent: '1260px',
};

const deviceSize = {
  tablet: 768,
  desktop: 1024,
  maxWidthContent: 1260,
};

const device = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  maxWidthContent: `(min-width: ${size.maxWidthContent})`,
};

export { size, device, deviceSize };
