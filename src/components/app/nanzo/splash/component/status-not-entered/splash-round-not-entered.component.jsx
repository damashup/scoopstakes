import React from 'react';
import Grid from '@material-ui/core/Grid';

import {PaperDiv, TypographyHeaderNotEntered} from './splash-round-not-entered.styles';

const SplashNotEntered = () => (
        <PaperDiv>
        <Grid container justify="center" alignItems="center">
            <TypographyHeaderNotEntered variant="h6" component="h2">
                You did not enter this round
            </TypographyHeaderNotEntered>
            </Grid>
        </PaperDiv>
        )

export default SplashNotEntered;

