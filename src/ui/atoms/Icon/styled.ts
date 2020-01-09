import styled from 'styled-components';
import theme from '../../theme';

type Props = {
  size: string;
};

const Wrapper = styled.span<Props>`
  svg {
    height: ${props => props.size};
    width: ${props => props.size};

    color: ${theme.palette.grayscale[2]};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
