import styled from 'styled-components';
import { screenSize, colors, paddings } from '../../../../shared/styles/vars';

const Options = styled.div`
  @media ${screenSize.MOBILE} {
  }

  @media ${screenSize.TABLET} {
    width: 30%;
  }

  @media ${screenSize.DESKTOP} {
    width: 20%;
    margin-left: ${paddings.DESKTOP};
  }
`;

const Option = styled.li`
  @media ${screenSize.MOBILE} {
    margin: 0.5rem 0;

    list-style-type: none;

    &:first-of-type {
      margin-top: 2rem;
    }

    a {
      font-size: 1.4rem;
      font-weight: 400;
      text-decoration: none;
      color: ${colors.FONT};
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Options, Option };
