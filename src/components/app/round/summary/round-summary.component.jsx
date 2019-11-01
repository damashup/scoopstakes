import React from 'react'

import Moment from 'react-moment';

import CustomButton from '../../../page-elements/button/custom-button/custom-button.component';

import {
    RoundContainer,
    RoundCTAContainer,
    RoundDeadlineDate,
    RoundDeadlineTime, 
    RoundDetails, 
    RoundHeader,
    RoundInfo,
    RoundNumber
    } from './round-summary.styles';

const RoundSummary = ({title, deadlineDate, round_no, cta}) => (
    <RoundContainer>

        <RoundHeader>{title}</RoundHeader>
        
        <RoundDetails>

            <RoundDeadlineDate>
                <Moment format="ddd">{deadlineDate}</Moment>
                <Moment format="D">{deadlineDate}</Moment>
                <Moment format="MMM">{deadlineDate}</Moment>
            </RoundDeadlineDate>

            <RoundInfo>
                <RoundNumber>Round {round_no}</RoundNumber>
                <RoundDeadlineTime>Entries by <Moment format="H:mma">{deadlineDate}</Moment></RoundDeadlineTime>              
            </RoundInfo>

        </RoundDetails>

        {cta ?
            <RoundCTAContainer>
                <CustomButton cta>Play Now</CustomButton>
            </RoundCTAContainer>
        : null}
        
  


    </RoundContainer>

        
)

export default RoundSummary;
