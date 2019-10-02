import styled from 'styled-components';
import { lighten } from 'polished';
import { colors, screenSize } from '../../shared/styles/vars';

export enum ButtonVariant {
  CTA = 'CTA',
  BORDERED = 'BORDERED',
  BLANK = 'BLANK'
}

interface IProps {
  variant: ButtonVariant;
  uppercase?: boolean;
}

const Button = styled.button<IProps>`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 4rem;
    border: 0;
    
    background-color: ${props =>
      // eslint-disable-next-line no-nested-ternary
      props.variant === ButtonVariant.CTA
        ? colors.ACCENT
        : props.variant === ButtonVariant.BORDERED
        ? 'transparent'
        : 'transparent'}
    
    border: ${props =>
      // eslint-disable-next-line no-nested-ternary
      props.variant === ButtonVariant.CTA
        ? '0'
        : props.variant === ButtonVariant.BORDERED
        ? `1px solid ${colors.ACCENT}`
        : '0'}
    border-radius: 3px;
    
    font-size: 1.3rem;
    color: ${props =>
      // eslint-disable-next-line no-nested-ternary
      props.variant === ButtonVariant.CTA
        ? '#ffffff'
        : props.variant === ButtonVariant.BORDERED
        ? colors.ACCENT
        : colors.ACCENT};
    
    text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
    letter-spacing: 0.1rem;
  }
  
  @media ${screenSize.TABLET} {
    display: block;
    margin-left: 60%;
    width: 40%;
  }
  
  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    
    &:hover {
      cursor: pointer;
      
      background-color: ${props =>
        // eslint-disable-next-line no-nested-ternary
        props.variant === ButtonVariant.CTA
          ? lighten(0.1, colors.ACCENT)
          : props.variant === ButtonVariant.BORDERED
          ? 'transparent'
          : 'transparent'}
    }
  }
`;

export default Button;
