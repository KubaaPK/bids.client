import styled from 'styled-components';
import {
  screenSize,
  spacing,
  colors,
  fontSize
} from '../../../../../shared/styles';

const Details = styled.div`
  @media ${screenSize.MOBILE} {
    padding: 0 ${spacing.m};
  }
`;

const List = styled.ul`
  @media ${screenSize.MOBILE} {
    margin-top: ${spacing.s};
    padding-left: 0;

    list-style-type: none;
  }
`;

const ParameterInfo = styled.li`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InfoType = styled.p`
  @media ${screenSize.MOBILE} {
    color: ${colors.font.normal};
    font-size: ${fontSize.s};
    font-weight: 500;
  }
`;

const InfoValue = styled.p`
  @media ${screenSize.MOBILE} {
    justify-self: flex-end;

    color: ${colors.font.normal};
    font-size: ${fontSize.s};
    font-weight: 400;
  }
`;

const Restrictions = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: ${spacing.xl};
  }
`;

const RestrictionsTitle = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
  }
`;

export {
  Details,
  List,
  ParameterInfo,
  InfoType,
  InfoValue,
  Restrictions,
  RestrictionsTitle
};
