import React from 'react';
import { useStyles } from './nanzo-fixture-item.styles';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import red from '@material-ui/core/colors/red';

const win = red[500]; // #F44336

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
            <Grid container className={classes.root} spacing={2} >
                <Grid item xs={5}>
                    <Paper className={classes.paperRight} elevation={0}>{homeTeam}</Paper>
                
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paperRes} elevation={1}>
                        <Grid container className={classes.root}>
                            <Grid item xs={3}><Paper className={`${classes.paperLeft} ${classes.paperRes} `} elevation={0} fontWeight={500}>{htScore}</Paper></Grid>    
                            <Grid item xs={6}>-</Grid>   
                            <Grid item xs={3}><Paper className={classes.paperRes} elevation={0}>{atScore}</Paper></Grid>   
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paperLeft} elevation={0}>{awayTeam}</Paper>
                </Grid>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={5}>
                    <Paper className={classes.paperRight} elevation={0}>You</Paper>
                </Grid>
                <Grid item xs={2}>
                        <Grid container className={classes.root}>
                            <Grid item xs={4}><Paper elevation={1}>{entrantHtGuess}</Paper></Grid>    
                            <Grid item xs={4}>-</Grid>   
                            <Grid item xs={4}><Paper elevation={1}>{entrantAtGuess}</Paper></Grid>   
                        </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={`${classes.paper} ${challengeResult === 'userWin' ? classes.winColor : ''}`} elevation={0}>
                        {entrantGamePoints} pts
                    </Paper>
                </Grid>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={5}>
                    <Paper className={classes.paperRight} elevation={0}>Nanzo</Paper>
                </Grid>
                <Grid item xs={2}>
                        <Grid container className={classes.root}>
                            <Grid item xs={4}><Paper elevation={1}>{nanzoHtGuess}</Paper></Grid>    
                            <Grid item xs={4}>-</Grid>   
                            <Grid item xs={4}><Paper elevation={1}>{nanzoAtGuess}</Paper></Grid>   
                        </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={`${classes.paper} ${challengeResult === 'nanzoWin' ? classes.winColor : ''}`} elevation={0}>
                        {nanzoGamePoints} pts
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    </Grid>
  );
}
