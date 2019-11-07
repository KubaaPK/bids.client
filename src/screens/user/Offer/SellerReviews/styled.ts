import styled from 'styled-components';
import { screenSize, paddings } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    margin-top: -1.5rem;
    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;
  }
`;

const PercentageRating = styled.p`
  @media ${screenSize.MOBILE} {
    width: 100%;
    margin-bottom: 0;

    font-size: 1.2rem;
  }
`;

const RatingNumber = styled.span`
  @media ${screenSize.MOBILE} {
    position: relative;
    top: 0.25rem;

    margin-right: 1rem;
    font-size: 1.4rem;
  }
`;

export { Wrapper, RatingNumber, PercentageRating };
