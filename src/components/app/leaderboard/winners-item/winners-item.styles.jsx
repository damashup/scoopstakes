import styled, {css}from 'styled-components';
import {colorQuinaryLight} from '../../../page-styles/base-styles';

const basicContainer = css`
  width: 100%
  align-self: center;
  min-height: 50px;
  //border-bottom: 1px solid darkgrey;
  padding: 1rem 0;
  font-size: 2rem;

  display: flex;
  align-items: center;
`;

export const WinnersItemHeaderContainer = styled.div`
    ${basicContainer}
    justify-content: center;
    background-color: ${colorQuinaryLight};
    text-tranform: uppercase;
    font-size: 150%;
    font-weight: bold; 
`;


export const WinnersItemContainer = styled.div`
  

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
  width: 10%
  margin-right: 1rem;
  

  & img {
    width: 100%;
    border-radius: 300px;
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



export const SmallTextContainer = styled.span`
  font-size: 60%;
  margin-left: 1rem;
`


