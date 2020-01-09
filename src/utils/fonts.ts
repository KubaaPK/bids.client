// eslint-disable-next-line import/prefer-default-export
export function getFontSizeInRems(
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
): string {
  switch (size) {
    case 'xs':
      return '1.1rem';
    case 's':
      return '1.2rem';
    case 'm':
      return '1.4rem';
    case 'l':
      return '1.75rem';
    case 'xl':
      return '2rem';
    case 'xxl':
      return '2.5rem';
    default:
      return '1.4rem';
  }
}
