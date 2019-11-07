import styled from 'styled-components';
import { screenSize, colors, paddings } from '../../../shared/styles/vars';

const Main = styled.main`
  @media ${screenSize.MOBILE} {
    background-color: ${colors.PRIMARY};
  }

  @media ${screenSize.DESKTOP} {
    padding: 0 ${paddings.DESKTOP};
  }
`;

const BasicInfoWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    width: 100%;
    padding-top: 14rem;
  }

  @media ${screenSize.TABLET} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    width: 100%;
    padding-top: 10rem;
  }
`;

const BasicInfo = styled.div`
  @media ${screenSize.TABLET} {
    width: 40%;
    padding: 2rem;

    background-color: #fff;
  }
`;

export { Main, BasicInfoWrapper, BasicInfo };
