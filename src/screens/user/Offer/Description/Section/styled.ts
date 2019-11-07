import styled from 'styled-components';
import { screenSize } from '../../../../../shared/styles/vars';

const Section = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  @media ${screenSize.DESKTOP} {
    flex-direction: row;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Section };
