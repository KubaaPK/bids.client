import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles/vars';

const Wrapper = styled.label`
  @media ${screenSize.MOBILE} {
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
  }
`;

const Checkbox = styled.input`
  @media ${screenSize.MOBILE} {
    &:checked {
      ~ span {
        background-color: #ffffff;
        border-radius: 2px;
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
        opacity: 1;
        border: 2px solid ${colors.SUCCESS};

        &:after {
          left: 7px;
          top: 1px;

          width: 6px;
          height: 12px;
          border: solid ${colors.SUCCESS};
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
  }
`;

const CheckMark = styled.span`
  @media ${screenSize.MOBILE} {
    position: absolute;
    top: 0;
    left: 0;

    height: 24px;
    width: 24px;

    border: 2px solid #ccc;
    border-radius: 2px;

    background-color: transparent;

    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;

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
      transition: all 0.3s ease-out;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -ms-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
    }
  }
`;

const LabelText = styled.p`
  @media ${screenSize.MOBILE} {
    position: relative;
    left: 3rem;

    width: 20rem;

    font-size: 1.4rem;

    span {
      font-size: 1.2rem;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export { Wrapper, Checkbox, CheckMark, LabelText };
