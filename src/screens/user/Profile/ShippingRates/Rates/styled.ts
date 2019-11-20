import styled from 'styled-components';
import { screenSize, colors } from '../../../../../shared/styles/vars';

const Rates = styled.ul`
  @media ${screenSize.MOBILE} {
    width: 100%;
    padding-left: 0;

    list-style-type: none;
  }
`;

const Rate = styled.li`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    padding: 2.5rem;
    &:first-of-type {
      margin-top: 2rem;
    }

    &:first-child {
      border-top: 1px solid #ccc;
    }
    &:nth-child(even) {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
`;

const Name = styled.p`
  @media ${screenSize.MOBILE} {
    width: 80%;

    font-size: 1.4rem;
    font-weight: 300;
  }
`;

const Edit = styled.button`
  @media ${screenSize.MOBILE} {
    width: 20% !important;

    border: 0;
    background-color: transparent;

    color: ${colors.SECONDARY_ACCENT};
    font-size: 1.4rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
  }
`;

export { Rates, Rate, Name, Edit };
