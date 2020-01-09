import styled from 'styled-components';
import theme from '../../../theme';

const Wrapper = styled.div`
  padding: ${theme.spacing.m};
  border-radius: ${theme.borderRadius};

  background-color: ${theme.palette.grayscale[7]};

  button {
    margin-top: ${theme.spacing.m};
  }

  h1 {
    margin: 0 0 ${theme.spacing.m} 0;

    font-size: ${theme.fontSizes.heading6};
    font-weight: 400;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
