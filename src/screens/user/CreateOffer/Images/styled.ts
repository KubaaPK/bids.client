import styled from 'styled-components';
import { X } from 'react-feather';
import { screenSize, colors } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    button {
      margin-top: 1rem;
    }

    overflow: hidden;
  }
`;

const Images = styled.ul`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    padding-left: 0;
  }
`;

const Text = styled.p`
  @media ${screenSize.MOBILE} {
    width: 100%;

    font-size: 1.2rem;
  }
`;

const ImagesWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const Image = styled.li`
  @media ${screenSize.MOBILE} {
    position: relative;

    width: 20%;
    margin: 2.5%;

    img {
      width: 100%;
    }
  }
`;

const Close = styled(X)`
  position: absolute;
  top: -1rem;
  right: -1rem;
`;

const ErrorMessage = styled.p`
  @media ${screenSize.MOBILE} {
    margin-top: -1rem;

    font-size: 1.4rem;
    color: ${colors.ERROR};
  }
`;

export { Wrapper, Images, Text, ImagesWrapper, Image, Close, ErrorMessage };
