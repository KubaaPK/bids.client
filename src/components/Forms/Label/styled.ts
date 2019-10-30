import styled from 'styled-components';
import { screenSize } from '../../../shared/styles/vars';

const Label = styled.label`
  @media ${screenSize.MOBILE} {
    display: block;
    margin-bottom: 0.75rem;

    font-size: 1.2rem;
    font-weight: 400;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Label };
