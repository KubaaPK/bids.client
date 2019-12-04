import styled from 'styled-components';
import { screenSize, paddings, colors } from '../../../../../shared/styles';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    width: 100%;
    padding: 1rem ${paddings.MOBILE};

    background-color: #ffffff;
  }
`;

const SubTitle = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.4rem;
  }
`;

type FeeProps = {
  debt: boolean;
};

const Fee = styled.p<FeeProps>`
  @media ${screenSize.MOBILE} {
    font-size: 2.2rem;
    font-weight: 700;
    color: ${props => (props.debt ? colors.ERROR : '#000000')};
  }
`;

export { Wrapper, SubTitle, Fee };
