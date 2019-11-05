import styled from 'styled-components';
import { screenSize, colors } from '../../../../../shared/styles/vars';

const Category = styled.li`
  @media ${screenSize.MOBILE} {
    flex: 0 0 auto;

    width: calc((100% / 3) - 0.5rem);
    padding: 2rem 0;

    list-style-type: none;
    text-align: center;
    a {
      font-size: 1.4rem;
      text-decoration: none;
      color: ${colors.GREYISH};
    }
  }

  @media ${screenSize.TABLET} {
    width: calc((100% / 6) - 0.5rem);
  }

  @media ${screenSize.DESKTOP} {
    padding: 0;
    margin: 1rem 0;

    border-bottom: 0;

    a {
      color: ${colors.FONT};
      font-size: 1.4rem;

      transition: 0.2s;
      &:hover {
        color: ${colors.SECONDARY_ACCENT};
      }
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Category };
