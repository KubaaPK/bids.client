import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { screenSize, paddings, colors } from '../../../../../shared/styles';

const Sale = styled.li`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    padding-left: 0;
    padding: 2rem ${paddings.MOBILE};

    list-style-type: none;

    background-color: #ffffff;
  }
`;

const Top = styled.p`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eaeaea;
  }
`;

const CreatedAt = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const Buyer = styled(Link)`
  @media ${screenSize.MOBILE} {
    font-size: 1.4rem;
    color: ${colors.SECONDARY_ACCENT};
    text-decoration: none;
  }
`;

const Thumbnail = styled.img`
  @media ${screenSize.MOBILE} {
    width: 20%;
  }
`;

const Text = styled.p`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    width: 75%;
    margin-left: 5%;

    font-size: 1.4rem;
  }
`;

const Title = styled.span`
  @media ${screenSize.MOBILE} {
    width: 60%;
    margin-right: 5%;

    font-size: 1.4rem;
  }
`;

const Price = styled.span`
  @media ${screenSize.MOBILE} {
    width: 35%;

    font-size: 1.6rem;
    font-weight: 700;
    text-align: right;
  }
`;

export { Sale, Top, Thumbnail, Text, Title, Price, Buyer, CreatedAt };
