import React from 'react'
import PageTitle from '../../page-elements/page-title/page-title.component';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {ResultsPageDiv, ResultsTitle} from './results.styles'
import AllRoundsContainer from '../../app/round/all-rounds/all-rounds.container';

const ResultsPage = () => {
    const title = 'Results and Schedule';
    return (
        <ResultsPageDiv>

        <Container maxWidth="lg">
          <Grid container spacing={3}>

            <ResultsTitle>
                <PageTitle title={title} />  
            </ResultsTitle>
                    
            <Grid item xs={12}>
              <Paper>
                <AllRoundsContainer list />
              </Paper>
            </Grid>
          </Grid>
        </Container>

  
        </ResultsPageDiv>
    )
}

export default ResultsPage;
