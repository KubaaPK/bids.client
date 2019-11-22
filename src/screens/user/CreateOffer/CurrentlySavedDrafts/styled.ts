import styled from 'styled-components';
import { X } from 'react-feather';
import { colors, paddings, screenSize } from '../../../../shared/styles/vars';

const Outline = styled.div`
  @media ${screenSize.TABLET} {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100vh;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.5);

    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    height: 100vh;
    width: 100%;
    padding: 1rem;

    background-color: #fff;

    overflow: scroll;
  }

  @media ${screenSize.TABLET} {
    position: relative;

    width: 50%;
    height: auto;
    margin: 0 auto;
  }

  @media ${screenSize.DESKTOP} {
    width: 40%;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Close = styled(X)`
  @media ${screenSize.MOBILE} {
    position: absolute;
    top: 1rem;
    right: ${paddings.MOBILE};
  }

  @media ${screenSize.DESKTOP} {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Drafts = styled.ul`
  @media ${screenSize.MOBILE} {
    padding: 1rem ${paddings.MOBILE};

    list-style-type: none;
  }
`;

const Draft = styled.li`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    padding: 2rem 0;
    border-bottom: 1px solid #ccc;
  }

  @media ${screenSize.DESKTOP} {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Thumbnail = styled.img`
  @media ${screenSize.MOBILE} {
    width: 20%;
    height: auto;
    margin-right: 5%;
  }
`;

const Text = styled.div`
  @media ${screenSize.MOBILE} {
    width: 50%;
  }
`;

const Name = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.3rem;
  }
`;

const Delete = styled.button`
  @media ${screenSize.MOBILE} {
    width: 25%;
    border: 0;

    background-color: transparent;

    color: ${colors.SECONDARY_ACCENT};
    font-size: 1.4rem;
    text-transform: uppercase;
    text-align: right;
  }

  @media ${screenSize.DESKTOP} {
    &:hover {
      cursor: pointer;
    }
  }
`;

const AddNewOffer = styled.button`
  @media ${screenSize.MOBILE} {
    margin-top: 2rem;
    border: 0;

    background-color: transparent;

    font-size: 1.4rem;
    color: ${colors.SECONDARY_ACCENT};
    text-transform: uppercase;
  }

  @media ${screenSize.DESKTOP} {
    &:hover {
      cursor: pointer;
    }
  }
`;

export {
  Outline,
  Wrapper,
  Close,
  Drafts,
  Draft,
  Thumbnail,
  Text,
  Name,
  Delete,
  AddNewOffer
};
