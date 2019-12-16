/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { screenSize, paddings } from '../../../shared/styles/vars';

const ComponentWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: relative;
    top: 1rem;

    padding: 1rem ${paddings.MOBILE};
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);

    background-color: #fff;
  }

  @media ${screenSize.TABLET} {
    top: 2rem;
  }

  @media ${screenSize.DESKTOP} {
    top: 0;

    width: calc(79vw - 14rem);
    height: 100%;
    margin-top: 0;
    margin-left: 10rem;
    border-radius: 5px;
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
  }
`;

export { ComponentWrapper };
