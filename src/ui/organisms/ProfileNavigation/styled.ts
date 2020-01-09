import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  div {
    border-radius: ${theme.borderRadius};

    background-color: hsl(0, 0%, 100%);
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
