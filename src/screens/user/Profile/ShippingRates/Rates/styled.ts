/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { screenSize } from '../../../../../shared/styles/vars';

const Rates = styled.ul`
  @media ${screenSize.MOBILE} {
    width: 100%;
    padding-left: 0;

    list-style-type: none;
  }
`;

export { Rates };
