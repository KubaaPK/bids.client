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
    position: relative;

    margin: 1.5rem 0;

    list-style-type: none;

    &:first-of-type {
      margin-top: 2rem;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    span {
      top: 0 !important;
      left: 6rem;

      padding-left: 0.55rem;
    }

    a {
      font-size: 1.4rem;
      font-weight: 400;
      text-decoration: none;
      color: ${colors.FONT};

      transition: 0.2s;
      &:hover {
        color: ${colors.SECONDARY_ACCENT};
      }
    }
  }
`;

const NotificationBubble = styled.span`
  @media ${screenSize.MOBILE} {
    position: absolute !important;
    top: -0.5rem !important;
    right: 0rem;

    height: 20px;
    width: 20px;
    margin: 0 !important;
    border-radius: 50%;
    border: 1px solid #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);

    background-color: ${colors.ACCENT};

    font-size: 1.2rem;
    color: #fff;
  }

  @media ${screenSize.TABLET} {
    top: -1rem !important;
    right: -1rem;
  }
`;

export { Options, Option, NotificationBubble };
