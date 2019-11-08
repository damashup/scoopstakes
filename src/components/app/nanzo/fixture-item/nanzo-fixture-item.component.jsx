import React from 'react';
import { useStyles, TeamBox } from './nanzo-fixture-item.styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TeamLogoContainer from '../../team/team-logo/team-logo.container';

export default function NanzoFixtureItem({
  homeTeam,
  awayTeam,
  htScore,
  atScore,
  entrantHtGuess,
  entrantAtGuess,
  nanzoHtGuess,
  nanzoAtGuess,
  entrantGamePoints,
  nanzoGamePoints
}) {
  const classes = useStyles();


  let challengeResult;
  if(entrantGamePoints > nanzoGamePoints){
      challengeResult = 'userWin'
  } else if(entrantGamePoints < nanzoGamePoints){
    challengeResult = 'nanzoWin'
  }


  return (
    

    
     <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
            <Grid container className={`${classes.root}`} spacing={2}>
                <Grid item xs={2}><TeamLogoContainer team={homeTeam} avatar/></Grid>
                <Grid item xs={3}><Paper className={classes.paperRight} elevation={0}><TeamBox fontWeight="fontWeightBold">{homeTeam}</TeamBox></Paper></Grid>
                <Grid item xs={2}>                   
                    <Paper className={classes.paperRes} elevation={1}>
                        <Grid container className={classes.root}>
                            <Grid item xs={5}>
                                <Paper className={`${classes.paperRight} ${classes.paperRes} `} elevation={0}>
                                <Box fontWeight="fontWeightBold">
                                {htScore}
                                </Box>
                                </Paper>
                            </Grid>    
                            <Grid item xs={2}><Paper className={`${classes.paperRes} `} elevation={0}>-</Paper></Grid>   
                            <Grid item xs={5}>
                                <Paper className={`${classes.paperLeft} ${classes.paperRes} `} elevation={0}>
                                <Box fontWeight="fontWeightBold">
                                {atScore}
                                </Box>
                                </Paper>
                            </Grid>   
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}><Paper className={classes.paperLeft} elevation={0}><TeamBox fontWeight="fontWeightBold">{awayTeam}</TeamBox></Paper></Grid>
                <Grid item xs={2}><TeamLogoContainer team={awayTeam} avatar/></Grid>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={5}><Paper className={classes.paperRight} elevation={0}>Your prediction</Paper></Grid>
                <Grid item xs={2}>
                        <Grid container className={classes.root}>
                            <Grid item xs={4}><Paper elevation={1}>{entrantHtGuess}</Paper></Grid>    
                            <Grid item xs={4}>-</Grid>   
                            <Grid item xs={4}><Paper elevation={1}>{entrantAtGuess}</Paper></Grid>   
                        </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={`${classes.paperLeft} ${challengeResult === 'userWin' ? classes.winColor : ''}`} elevation={0}>
                        {entrantGamePoints} pts
                    </Paper>
                </Grid>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={5}><Paper className={classes.paperRight} elevation={0}>Nanzo's prediction</Paper></Grid>
                <Grid item xs={2}>
                        <Grid container className={classes.root}>
                            <Grid item xs={4}><Paper elevation={1}>{nanzoHtGuess}</Paper></Grid>    
                            <Grid item xs={4}>-</Grid>   
                            <Grid item xs={4}><Paper elevation={1}>{nanzoAtGuess}</Paper></Grid>   
                        </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={`${classes.paperLeft} ${challengeResult === 'nanzoWin' ? classes.winColor : ''}`} elevation={0}>
                        {nanzoGamePoints} pts
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    </Grid>
  );
}
