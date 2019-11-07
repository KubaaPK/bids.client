import styled from 'styled-components';
import { screenSize, paddings } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    padding: 2rem ${paddings.MOBILE};

    background-color: #fff;
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.3rem;
  }
`;

const Form = styled.form``;

const ChangeNumberOfItemsButton = styled.button`
  @media ${screenSize.MOBILE} {
    height: 4rem;
    width: 4rem;
    border: 0;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;

    background-color: transparent;

    font-size: 1.6rem;

    &:first-of-type {
      border-left: 1px solid #ccc;
    }

    &:nth-of-type(2) {
      border-right: 1px solid #ccc;
    }

    transition: 0.2s;
  }
`;

const StockInput = styled.input`
  @media ${screenSize.MOBILE} {
    height: 4rem;
    width: 6rem;

    margin-bottom: 2rem;
    padding-left: 0.5rem;
    border: 1px solid #ccc;

    font-size: 1.6rem;

    transition: 0.2s;
  }
`;

const InStock = styled.span`
  @media ${screenSize.MOBILE} {
    margin-left: 1rem;

    font-size: 1.3rem;
  }
`;

export { Wrapper, Title, Form, ChangeNumberOfItemsButton, StockInput, InStock };
