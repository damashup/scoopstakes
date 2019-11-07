import React from 'react'

import { RoundNoHeaderPaper, TypographyHeader } from './splash-number.styles';

const SplashNumber = ({round}) => {
    return (
        <RoundNoHeaderPaper square elevation={0}> 
            <TypographyHeader variant="h2" component="h2">Round {round.round_no}</TypographyHeader>
        </RoundNoHeaderPaper>
    )
}

export default SplashNumber;
