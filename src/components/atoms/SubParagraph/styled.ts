import styled from 'styled-components';
import { screenSize, fontSize, colors } from '../../../shared/styles';

const SubParagraph = styled.p`
  @media ${screenSize.MOBILE} {
    margin: 0;

    font-size: ${fontSize.m};
    color: ${colors.font.lighten};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { SubParagraph };
