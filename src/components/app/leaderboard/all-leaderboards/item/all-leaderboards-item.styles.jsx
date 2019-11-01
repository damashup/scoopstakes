import styled, {css}from 'styled-components';
import {colorGreyLight2, colorWhite} from '../../base';

const basicContainer = css`
  width: 100%
  align-self: center;
  display: flex;
  min-height: 50px;
  border-bottom: 1px solid darkgrey;
  padding: 1rem 0;
  font-size: 2rem;
  align-items: center;
`;

export const AllLeaderboardsItemHeaderContainer = styled.div`
  background-color: ${colorGreyLight2};
  //color: ${colorWhite};

  ${basicContainer}
`;


export const AllLeaderboardsItemContainer = styled.div`
  

  ${basicContainer}

  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
`;

export const SeasonTextContainer = styled.span`
  width: 20%;
  padding-left: 1rem;
`;

export const ImageContainer = styled.div`
  width: 20%
  margin-right: 1rem;

  & img {
    width: 100%;
  }
`;

export const RoundInfoContainer = styled.span`
  width: 40%;
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

export const PrizePoolInfoContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const TextContainer = styled.span`

`;

export const ForwardButtonContainer = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`;



export const SmallTextContainer = styled.span`
  font-size: 60%;
  margin-left: 1rem;
`

