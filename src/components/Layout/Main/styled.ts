import styled from 'styled-components';
import { colors, screenSize } from '../../../shared/styles';

type Props = {
  mobileDirection?: 'column' | 'row';
  tabletDirection?: 'column' | 'row';
  desktopDirection?: 'column' | 'row';
};

const Main = styled.main<Props>`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => props.mobileDirection || 'column'};

    padding-top: 13rem;
    padding-bottom: 2rem;
    min-height: 100vh;

    background-color: ${colors.PRIMARY};
  }

  @media ${screenSize.TABLET} {
    flex-direction: ${props => props.tabletDirection || 'column'};
    padding-top: 8rem;
  }

  @media ${screenSize.DESKTOP} {
    flex-direction: ${props => props.desktopDirection || 'column'};
    padding-top: 10rem;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Main };
