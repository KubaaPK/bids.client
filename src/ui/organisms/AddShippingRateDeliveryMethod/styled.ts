import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  margin-top: ${theme.spacing.l};
`;

const Rates = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  margin-top: ${theme.spacing.l};
  padding-left: ${theme.spacing.l};

  div {
    width: 47.5%;
    margin-left: 2.5%;
  }
`;

export { Wrapper, Rates };
