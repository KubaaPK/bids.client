import styled from 'styled-components';
import { darken } from 'polished';
import { colors, screenSize } from '../../../shared/styles/vars';

const Label = styled.label`
  @media ${screenSize.MOBILE} {
    display: block;
    margin-bottom: 0.5rem;

    font-size: 1.3rem;
    color: ${darken(0.75, colors.GREYISH)};
  }
`;

export default Label;
