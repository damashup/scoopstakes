import styled, {css} from 'styled-components';

import {colorGreyLight1} from '../../../page-styles/base-styles';

const getLeaderboardRowTyoe = props => {
    if(props.header){return leaderboardHeaderStyles;}
} 

export const LeaderboardTableHeading = styled.h2`
  width: 70%;
  margin: 2.5rem auto 0 auto;
  text-align: center;
  font-size: 300%;
  font-weight: 100;
`;

export const leaderboardHeaderStyles = css`
    margin-top: 1rem;
    font-weight: bold;
    background-color: ${colorGreyLight1};
`;

export const LeaderboardTableDiv = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  min-height: 30px;
  border-bottom: 1px solid darkgrey;
  padding: 1rem 0;
  font-size: 2rem;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #eee;
  }

  ${getLeaderboardRowTyoe}
`;

export const ImageContainer = styled.span`
  width: 15%;
  & img {
    width: 60%;
    border-radius: 50%;
  }
`;

export const TextContainer = styled.span`
  width: 40%;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`;


export const PointsContainer = styled.span`
  width: 20%;
  text-align: center;
`;

export const PayoutContainer = styled.span`
  width: 20%;
  text-align: right;
`;

export const ForwardButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const SmallTextContainer = styled.span`
  font-size: 60%;
  //font-weight: bold;
  //margin: 0 1rem;
`;



