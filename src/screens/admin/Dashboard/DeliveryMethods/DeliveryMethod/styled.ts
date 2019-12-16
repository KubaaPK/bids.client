import styled from 'styled-components';
import { lighten } from 'polished';
import { screenSize, colors } from '../../../../../shared/styles/vars';

const DeliveryMethod = styled.li`
  @media ${screenSize.MOBILE} {
    list-style-type: none;

    padding: 1rem 0;

    border-bottom: 2px solid hsl(210, 25%, 90%);

    &:last-of-type {
      border-bottom: 0;
    }
  }
`;

const NameAndDeleteWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Name = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
  }
`;

const DeleteButton = styled.button`
  @media ${screenSize.MOBILE} {
    position: relative;
    top: 1.5rem;

    border: none;
    background-color: transparent;
    color: ${colors.ERROR};
  }
`;

const PaymentPolicy = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1rem;

    color: ${lighten(0.25, colors.FONT)};
  }
`;

export {
  DeliveryMethod,
  NameAndDeleteWrapper,
  Name,
  DeleteButton,
  PaymentPolicy
};
