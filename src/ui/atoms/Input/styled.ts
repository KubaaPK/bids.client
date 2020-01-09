import styled from 'styled-components';
import theme from '../../theme';

type Props = {
  invalid: boolean;
};

const Input = styled.input<Props>`
  display: block;
  width: 100%;
  height: 4rem;
  margin: 0;
  padding: 0 ${theme.spacing.s};
  box-sizing: border-box;
  border: 1px solid
    ${props =>
      props.invalid ? theme.palette.danger[0] : theme.palette.grayscale[4]};
  border-radius: 0.5rem;

  font-family: ${theme.font.primary};
  font-size: ${theme.fontSizes.body};
  color: ${theme.palette.grayscale[1]};

  transition: 150ms ease-in-out;
  &:focus {
    outline: none;

    border: 1px solid
      ${props =>
        props.invalid ? theme.palette.danger[0] : theme.palette.grayscale[2]};
  }

  transition: 150ms;
  &:hover {
    border: 1px solid ${theme.palette.grayscale[2]};
  }
`;

const TextArea = styled.textarea<Props>`
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  padding: ${theme.spacing.s};
  box-sizing: border-box;
  border: 1px solid
    ${props =>
      props.invalid ? theme.palette.danger[0] : theme.palette.grayscale[4]};
  border-radius: 0.5rem;

  font-family: ${theme.font.primary};
  font-size: ${theme.fontSizes.body};
  color: ${theme.palette.grayscale[1]};
`;

const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;

  color: ${theme.palette.danger[0]};
  font-size: ${theme.fontSizes.small};
`;

export { Input, TextArea, ErrorMessage };
