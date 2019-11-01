import styled, {css} from 'styled-components';



const background = css`
    background-color: #02024d;
`;

export const PredictionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem; 
    color: #fff;  
    ${background}
`;



export const PredictionEntrant = styled.span`
    margin: 5rem auto;  
    display: flex;
    align-items: center;
`;


export const ImageContainer = styled.span`
  //width: 15rem;
  height: 15rem;
  margin-right: 2rem;
  & img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const PredictionEntrantName = styled.h2`
  font-size: 3rem;
  //margin: 5rem auto;
  
  font-weight: bold;  
`;

export const EntrantLineContainer = styled.div`
  //width: 50%;
  align-self: center;
  display: flex;
  min-height: 50px;
  border-bottom: 1px solid darkgrey;
  padding: 1rem 0;
  font-size: 2rem;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
`;



// export const TextContainer = styled.span`
//   width: 43%;
// `;


// export const SmallTextContainer = styled.span`
//   font-size: 60%;
//   margin-left: 1rem;

// `
