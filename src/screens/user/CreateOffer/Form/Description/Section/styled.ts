import styled from 'styled-components';
import { Type } from 'react-feather';
import { screenSize } from '../../../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    margin: 2rem 0;

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const Buttons = styled.div`
  @media ${screenSize.MOBILE} {
    width: 100%;
    padding: 1rem;

    background-color: #f0f0f0;
  }
`;

const AddTextItemButton = styled(Type)``;

const ItemsWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export { Wrapper, Buttons, AddTextItemButton, ItemsWrapper };
