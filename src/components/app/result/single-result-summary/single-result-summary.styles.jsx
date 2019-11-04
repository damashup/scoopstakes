import styled from "styled-components";

import { summaryBox, 
    colorPrimary,
    colorWhite } from "../../../page-styles/base-styles";

export const SingleResultSummaryDiv = styled.div`
  ${summaryBox}
`;

export const SingleResultSummaryDetails = styled.div``;
export const SingleResultSummaryLink = styled.div``;


export const RoundDiv = styled.div`
    grid-row: 1 / -1;
    background-color: ${colorWhite};

`;

        export const SingleResultSummaryHeader = styled.div`
            background-color: ${colorPrimary};
            color: ${colorWhite};
            font-weight: bold;
            font-size: 2rem;
            padding: 1rem;
        `;

        export const RoundDetails = styled.div`
            display: flex;
            font-size: 2rem;
            

        `;

                export const RoundDeadlineDate = styled.div`
                    width: 25%;
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

                export const RoundInfo = styled.div`
                    margin: 1rem;
                    padding: 1rem;
                    flex-direction: column;

                    display: flex;
                    align-items: space-between;
                    justify-content: space-between;
                    
                `;

                        export const RoundNumber = styled.h2`
                            font-weight: bold;
                        `;

                        export const RoundDeadlineTime = styled.div`

                        `;

        export const RoundCTADiv = styled.div`
            padding: 2rem;
            display: flex;
            align-item: center;
            justify-content: center;

        `;