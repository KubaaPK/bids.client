import styled from 'styled-components';
import { lighten } from 'polished';
import { screenSize, colors } from '../../../../../shared/styles/vars';

const DeliveryMethod = styled.li`
  @media ${screenSize.MOBILE} {
    list-style-type: none;

    padding: 1rem 0;

    &:nth-child(odd) {
      border-bottom: 1px solid #ccc;
    }
  }
`;

const Name = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
  }
`;

const PaymentPolicy = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1rem;

    color: ${lighten(0.25, colors.FONT)};
  }
`;

export { DeliveryMethod, Name, PaymentPolicy };
