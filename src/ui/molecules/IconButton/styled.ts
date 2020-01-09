import styled from 'styled-components';

const Wrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: fit-content;

  span {
    display: inline-flex;
    margin-right: 0.5rem;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
