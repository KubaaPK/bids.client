import styled from 'styled-components';
import { screenSize, colors } from '../../../../shared/styles/vars';

const Wrapper = styled.div``;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.4rem;
  }
`;

const DescriptionWrapper = styled.div`
  @media ${screenSize} {
    position: relative;

    min-height: 20vh;
    padding-bottom: 5rem;
    border: 1px solid ${colors.ACCENT};
  }
`;

const AddSectionButton = styled.button`
  @media ${screenSize.MOBILE} {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    margin: 0 auto;
    padding: 0.5rem 1rem;
    border: 0;

    background-color: transparent;

    font-size: 1.4rem;
    text-transform: uppercase;
    text-align: center;
    color: ${colors.SECONDARY_ACCENT};
  }
`;

export { Wrapper, Title, DescriptionWrapper, AddSectionButton };
