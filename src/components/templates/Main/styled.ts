import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles';

type Props = {
  mobileFlexDirection?: 'column' | 'row';
  tabletFlexDirection?: 'column' | 'row';
  desktopFlexDirection?: 'column' | 'row';
};

const Main = styled.main<Props>`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => props.mobileFlexDirection || 'column'};

    padding-top: 13rem;
    padding-bottom: 2rem;
    min-height: 100vh;

    background-color: ${colors.PRIMARY};
  }

  @media ${screenSize.TABLET} {
    flex-direction: ${props => props.tabletFlexDirection || 'row'};
    padding-top: 8rem;
  }

  @media ${screenSize.DESKTOP} {
    flex-direction: ${props => props.desktopFlexDirection || 'column'};
    padding-top: 10rem;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Main };
