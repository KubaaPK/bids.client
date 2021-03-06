import styled from 'styled-components';
import { lighten } from 'polished';
import { screenSize, colors } from '../../shared/styles/vars';

type Props = {
  variant: 'full' | 'bordered' | 'blank';
};

const Button = styled.button.attrs({
  role: 'button'
})<Props>`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 40px;

    background-color: ${props =>
      props.variant === 'full' ? colors.ACCENT : 'transparent'} !important;
    border: ${props =>
      props.variant === 'bordered'
        ? `1px solid ${colors.ACCENT}`
        : 'none'} !important;
    border-radius: 3px;

    color: ${props =>
      props.variant === 'full' ? '#fff' : colors.ACCENT} !important;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;

    &:hover {
      background-color: ${props =>
        props.variant === 'full'
          ? lighten(0.15, colors.ACCENT)
          : 'transparent'} !important;

      cursor: pointer;
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Button };
