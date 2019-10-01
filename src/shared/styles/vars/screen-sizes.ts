const sizes = {
  SMALL: '20em',
  MEDIUM: '48em',
  LARGE: '64em'
};

export default {
  MOBILE: `only screen and (min-width: ${sizes.SMALL})`,
  TABLET: `only screen and (min-width: ${sizes.MEDIUM})`,
  DESKTOP: `only screen and (min-width: ${sizes.LARGE})`
};
