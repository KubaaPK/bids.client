import styled from 'styled-components';
import { screenSize } from '../../../../../../shared/styles/vars';

const Wrapper = styled.div``;

const List = styled.ul`
  @media ${screenSize.MOBILE} {
    margin-top: 2rem;
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
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const InfoValue = styled.p`
  @media ${screenSize.MOBILE} {
    justify-self: flex-end;

    font-size: 1.1rem;
    font-weight: 400;
  }
`;

const Restrictions = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: 4rem;
  }
`;

const RestrictionsTitle = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
  }
`;

export {
  Wrapper,
  List,
  ParameterInfo,
  InfoType,
  InfoValue,
  Restrictions,
  RestrictionsTitle
};
