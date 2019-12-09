import styled from 'styled-components';
import { screenSize, paddings, colors } from '../../../../../shared/styles';

const Purchase = styled.li`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    padding: 2rem ${paddings.MOBILE};

    list-style-type: none;

    background-color: #ffffff;

    button {
      width: 12%;
      margin-left: 2rem;

      text-align: right;
      &:hover {
        background-color: transparent;
        color: ${colors.SECONDARY_ACCENT};
      }
    }
  }
`;

const Thumbnail = styled.img`
  @media ${screenSize.MOBILE} {
    width: 25%;
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    width: 50%;
    margin-left: 5%;

    font-size: 1.4rem;
  }
`;

const Bottom = styled.div`
  @media ${screenSize.MOBILE} {
    width: 100%;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #ccc;

    text-align: right;
  }
`;

const Price = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

export { Purchase, Thumbnail, Title, Bottom, Price };
