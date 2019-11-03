import styled from 'styled-components';
import { colors, screenSize } from '../../../../../../shared/styles/vars';

const Details = styled.div``;

const Leaf = styled.p`
  @media ${screenSize.MOBILE} {
    margin-top: 0;
    margin-bottom: 3rem;

    font-size: 1.2rem;

    opacity: 0.3;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
`;

const DeleteButton = styled.button`
  @media ${screenSize.MOBILE} {
    padding: 0 0.3rem;
    border: 0;

    background-color: transparent;

    svg {
      height: 2rem;
      width: 2rem;

      color: ${colors.ERROR};
    }
  }

  @media ${screenSize.DESKTOP} {
    &:hover {
      cursor: pointer;
    }
  }
`;

const ParametersTitle = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
  }
`;

const Parameters = styled.ul`
  @media ${screenSize.MOBILE} {
    padding-left: 0;
  }
`;

export { Details, Leaf, Buttons, DeleteButton, Parameters, ParametersTitle };
