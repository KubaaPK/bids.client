import styled from 'styled-components';
import { screenSize, colors } from '../../shared/styles/vars';
import { lighten } from 'polished';

type Props = {
  variant: 'full' | 'bordered' | 'blank';
};

const Button = styled.button<Props>`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 40px;

    background-color: ${props =>
      props.variant === 'full' ? colors.ACCENT : 'transparent'};
    border: ${props =>
      props.variant === 'bordered' ? `1px solid ${colors.ACCENT}` : 'none'};
    border-radius: 2px;

    color: ${props => (props.variant === 'full' ? '#fff' : colors.ACCENT)};
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;

    &:hover {
      background-color: ${lighten(0.15, colors.ACCENT)};

      cursor: pointer;
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Button };
