import styled from 'styled-components';
import {
    colorGreyLight3,
    colorPrimary,
    colorPrimaryDark, 
    colorWhite} from '../../../page-styles/base-styles';


export const NextRoundDiv = styled.div`
    background-color: ${colorWhite};
`;

        export const NextRoundHeader = styled.div`
            background-color: ${colorGreyLight3};
            color: ${colorPrimaryDark};
            font-weight: bold;
            font-size: 2rem;
            //padding: 1rem;
            display: flex;
            justify-content: center;
            //margin-top: -2.5rem;
        `;

                export const ArrowDownIcon = styled.svg`
                width: 4rem;
                height: 5.2rem;
                //margin-top: -0.4rem;
                stroke-width: 0rem;
                stroke: ${colorPrimaryDark};
                fill: ${colorWhite};
                `;

export const NextRoundDetails = styled.div`
    display: flex;
    font-size: 2rem;
    

`;
export const NextRoundDeadlineDate = styled.div`
    //width: 25%;
    margin: 1rem;
    padding: 1rem;
    background-color: ${colorPrimary};
    border-radius: 1rem;
    color: ${colorWhite};
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;


export const NextRoundInfo = styled.div`
    margin: 1rem;
    padding: 1rem;
    flex-direction: column;

    display: flex;
    align-items: space-between;
    justify-content: space-between;
    
`;

export const NextRoundNumber = styled.h2`
    font-weight: bold;
`;

export const NextRoundDeadlineTime = styled.div`

`;

export const NextRoundCTADiv = styled.div`
    padding: 2rem;
    display: flex;
    align-item: center;
    justify-content: center;

`;

export const NextRoundSummaryDiv= styled.div`

`;