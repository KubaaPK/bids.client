import styled from 'styled-components';
import { screenSize, colors, spacing } from '../../../shared/styles/vars';

const RadioWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    > div:first-of-type {
      margin: ${spacing.l} 0;
    }
  }
`;

const Label = styled.label`
  @media ${screenSize.MOBILE} {
    margin-right: 2rem;

    font-size: 1.2rem;
  }
`;

const Radio = styled.input`
  @media ${screenSize.MOBILE} {
    &:checked,
    &:not(:checked) {
      position: absolute;
      left: -9999px;
    }

    &:checked + label,
    &:not(:checked) + label {
      position: relative;
      padding-left: 28px;
      cursor: pointer;
      line-height: 20px;
      display: inline-block;
      color: ${colors.FONT};
    }

    &:checked + label:before,
    &:not(:checked) + label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;
      border: 1px solid ${colors.border.darkerGrey};
      border-radius: 100%;
      background: hsl(0, 100%, 100%);
    }

    &:checked + label:after,
    &:not(:checked) + label:after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${colors.accent};
      position: absolute;
      top: 4px;
      left: 4px;
      border-radius: 100%;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    &:not(:checked) + label:after {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    &:checked + label:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export { RadioWrapper, Radio, Label };
