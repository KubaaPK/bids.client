import styled from 'styled-components';
import { screenSize, paddings } from '../../../../../shared/styles';

const Review = styled.li`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    padding: 2rem ${paddings.MOBILE};

    background-color: #fff;
  }
`;

const Thumbnail = styled.img`
  @media ${screenSize.MOBILE} {
    width: 25%;
    margin-right: 5%;
  }

  @media ${screenSize.DESKTOP} {
    width: 10%;
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    width: 70%;

    font-size: 1.2rem;
  }

  @media ${screenSize.DESKTOP} {
    width: 40%;
  }
`;

const Ratings = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    width: 100%;
    margin-top: 1rem;

    div {
      width: 60%;

      span {
        font-size: 2.5rem !important;
      }
    }

    button {
      width: 40%;
    }
  }

  @media ${screenSize.DESKTOP} {
    width: 45%;
  }
`;

export { Review, Thumbnail, Title, Ratings };
