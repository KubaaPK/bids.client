import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.label`
  display: block;

  position: relative;
  height: 24px;
  width: 24px;

  cursor: pointer;

  font-size: 22px;
  line-height: 24px;

  clear: both;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

const Checkbox = styled.input`
  &:checked {
    ~ span {
      background-color: hsl(0, 0%, 100%);
      border-radius: 2px;
      -webkit-transform: rotate(0deg) scale(1);
      -ms-transform: rotate(0deg) scale(1);
      transform: rotate(0deg) scale(1);
      opacity: 1;
      border: 2px solid ${theme.palette.primary[0]};
      border-radius: ${theme.borderRadius};

      &:after {
        left: 7px;
        top: 1px;

        width: 6px;
        height: 12px;
        border: solid ${theme.palette.primary[0]};
        border-width: 0 2px 2px 0;
        border-radius: 0;
        background-color: transparent;

        -webkit-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
        opacity: 1;
      }
    }
  }
`;

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  height: 24px;
  width: 24px;

  border: 2px solid #ccc;
  border-radius: ${theme.borderRadius};

  background-color: transparent;

  transition: all 0.1s ease-out;
  -webkit-transition: all 0.1s ease-out;
  -moz-transition: all 0.1s ease-out;
  -ms-transition: all 0.1s ease-out;
  -o-transition: all 0.1s ease-out;

  &:after {
    content: '';

    position: absolute;
    left: 12px;
    top: 12px;

    height: 0;
    width: 0;
    border-radius: 2px;
    border: solid #009bff;
    border-width: 0 3px 3px 0;

    -webkit-transform: rotate(0deg) scale(0);
    -ms-transform: rotate(0deg) scale(0);
    transform: rotate(0deg) scale(0);
    opacity: 1;
    transition: all 0.1s ease-out;
    -webkit-transition: all 0.1s ease-out;
    -moz-transition: all 0.1s ease-out;
    -ms-transition: all 0.1s ease-out;
    -o-transition: all 0.1s ease-out;
  }
`;

const LabelText = styled.p`
  position: relative;
  left: 3rem;

  width: 20rem;

  font-size: ${theme.fontSizes.body};

  span {
    font-size: ${theme.fontSizes.small};
    color: rgba(0, 0, 0, 0.5);
  }
`;

export { Wrapper, Checkbox, CheckMark, LabelText };
