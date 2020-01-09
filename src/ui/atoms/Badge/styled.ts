import styled from 'styled-components';
import theme from '../../theme';

type Props = {
  color: string;
  fontColor: string;
  type: 'full' | 'bordered';
};

function backgroundColor(type: Props['type'], color: string): string {
  if (type === 'full') {
    return color;
  }
  return 'transparent';
}

function border(type: Props['type'], color: string): string {
  if (type === 'full') {
    return 'none;';
  }
  return `1px solid ${color}`;
}

const Wrapper = styled.div<Props>`
  width: max-content;
  padding: ${theme.spacing.xs} ${theme.spacing.s};
  border: ${props => border(props.type, props.color)};
  border-radius: 0.6rem;

  background-color: ${props => backgroundColor(props.type, props.color)};

  color: ${props => props.fontColor};
  font-size: ${theme.fontSizes.body};
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
