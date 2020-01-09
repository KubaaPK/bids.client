import styled from 'styled-components';
import theme from '../../theme';

type Props = {
  fontSize?: string;
};

const Wrapper = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: fit-content;

  span {
    display: inline-flex;
    margin-right: 0.5rem;

    font-size: ${props =>
      props.fontSize ? props.fontSize : theme.fontSizes.small}};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
