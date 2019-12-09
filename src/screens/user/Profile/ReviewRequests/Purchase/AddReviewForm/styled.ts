import styled from 'styled-components';
import { X, ThumbsDown, ThumbsUp } from 'react-feather';
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

    form {
      position: relative;

      height: 112.5%;
      padding: 2rem ${paddings.MOBILE};

      background-color: #ffffff;

      button {
        width: 100%;
        margin-left: 0;
        text-align: center;
      }
    }
  }

  @media ${screenSize.TABLET} {
    form {
      position: relative;

      width: 60%;
      margin: 0 auto;
    }
  }

  @media ${screenSize.DESKTOP} {
    form {
      top: 2.5vh;

      height: initial;
      width: 35%;

      button {
        &:first-of-type {
          margin-top: 3rem;
        }
      }
    }
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

const Thumbs = styled.div`
  @media ${screenSize.MOBILE} {
    margin-bottom: 2rem;
  }

  @media ${screenSize.DESKTOP} {
    margin-bottom: 0;

    svg {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const ThumbsTitle = styled.p`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 700;
  }
`;

type ThumbsProps = {
  selected: 'POSITIVE' | 'NEGATIVE';
};

const ThumbUp = styled(ThumbsUp)<ThumbsProps>`
  @media ${screenSize.MOBILE} {
    margin-right: 2rem;

    color: ${props => (props.selected === 'POSITIVE' ? colors.ACCENT : '#000')};
  }
`;

const ThumbDown = styled(ThumbsDown)<ThumbsProps>`
  @media ${screenSize.MOBILE} {
    color: ${props => (props.selected === 'NEGATIVE' ? colors.ACCENT : '#000')};
  }
`;

export {
  Outline,
  ReviewSection,
  SectionTitle,
  Close,
  BottomClose,
  Thumbs,
  ThumbDown,
  ThumbUp,
  ThumbsTitle
};
