import React from 'react';
import Grid from '@material-ui/core/Grid';

import {PaperDiv, TypographyHeaderNotEntered} from './splash-round-not-finished.styles';


const SplashNotFinished = ({roundStatus}) => (
        <PaperDiv>
            <Grid container justify="center" alignItems="center">
                <TypographyHeaderNotEntered variant="h6" component="h2">
                    Your entry is in! Scores will update when round is complete.
                </TypographyHeaderNotEntered>
            </Grid>
        </PaperDiv>
        )  

export default SplashNotFinished;

