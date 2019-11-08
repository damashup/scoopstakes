import React from 'react';

import {TypographyHeader, HeaderRow} from './splash-outcome.styles';


const SplashOutcome = ({resultText, resultEmoji}) => (

                <HeaderRow>
                    <TypographyHeader variant="h2" component="h2">
                        <div>{resultText} &nbsp;</div>
                        <div>{resultEmoji}</div>
                    </TypographyHeader>   
                </HeaderRow>
  

        )
 
export default SplashOutcome;