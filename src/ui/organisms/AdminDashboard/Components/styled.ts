import styled from 'styled-components';
import theme from '../../../theme';

const Title = styled.p`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 0;

  span {
    font-size: ${theme.font.primary};
    font-size: ${theme.fontSizes.heading5};
  }

  button {
    margin-left: auto;
  }
`;

export { Title };