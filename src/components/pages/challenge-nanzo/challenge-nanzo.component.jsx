import React from 'react'
import PageTitle from '../../page-elements/page-title/page-title.component';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {ChallengeNanzoPageDiv} from './challenge-nanzo.styles'
import AllRoundsContainer from '../../app/round/all-rounds/all-rounds.container';
import NanzoTab from '../../app/nanzo/tab';

const ChallengeNanzoPage = () => {
    const title = 'Challenge Nanzo';
    return (
        <ChallengeNanzoPageDiv>

        <Container maxWidth="lg">
          <Grid container spacing={3}>


            <PageTitle title={title} />  
                    
            <Grid item xs={12}>
              <Paper>
                <NanzoTab />
              </Paper>
            </Grid>
          </Grid>
        </Container>

  
        </ChallengeNanzoPageDiv>
    )
}

export default ChallengeNanzoPage;
