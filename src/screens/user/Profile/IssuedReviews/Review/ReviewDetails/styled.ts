import styled from 'styled-components';
import { X } from 'react-feather';
import { screenSize, paddings, colors } from '../../../../../../shared/styles';

const Outline = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;

    overflow-x: hidden;
    overflow-y: scroll;

    height: auto;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: relative;

    height: 100%;
    padding: 2rem ${paddings.MOBILE};

    background-color: #ffffff;

    button {
      width: 100%;
      margin-left: 0;
      text-align: center;
    }
  }

  @media ${screenSize.TABLET} {
    position: relative;

    width: 60%;
    margin: 0 auto;
  }

  @media ${screenSize.DESKTOP} {
    top: 7.5vh;

    height: initial;
    width: 35%;

    button {
      &:first-of-type {
        margin-top: 3rem;
      }
    }
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 2rem;
  }
`;

const ReviewSection = styled.div`
  @media ${screenSize.MOBILE} {
    margin: 2rem 0;
  }
`;

const SectionTitle = styled.p`
  @media ${screenSize.MOBILE} {
    margin-top: 0;

    font-size: 1.4rem;
  }
`;

const Close = styled(X)`
  @media ${screenSize.MOBILE} {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

const BottomClose = styled.button`
  @media ${screenSize.MOBILE} {
    position: absolute;
    bottom: 0;
    left: 0;

    height: 40px;
    border: 0;

    background-color: transparent;

    color: ${colors.SECONDARY_ACCENT};
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media ${screenSize.DESKTOP} {
    display: none;
  }
`;

export {
  Outline,
  Wrapper,
  Title,
  ReviewSection,
  SectionTitle,
  Close,
  BottomClose
};
