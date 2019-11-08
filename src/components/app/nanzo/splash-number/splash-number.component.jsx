import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import { RoundNoHeaderPaper, TypographyHeader } from './splash-number.styles';
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link as RouterLink } from 'react-router-dom';
import { selectLatestRound } from '../../../../redux/leaderboard/selectors/leaderboard.selectors';

function zeroPad(num, places) {
    return String(num).padStart(places, '0')
  }

const SplashNumber = ({round, selectLatestRound, roundId, match}) => {
    
    const previousRound= zeroPad(parseInt(round.round_no) - 1, 2);
    const previous = `${round.season}-${previousRound}`;
    const nextRound= zeroPad(parseInt(round.round_no) + 1,2);
    const next = `${round.season}-${nextRound}`;

    return (
        <RoundNoHeaderPaper square elevation={0}>
            {previousRound > 0 ?
            <Button component={RouterLink} to={`/challenge-nanzo/${previous}`}>
                <ArrowBackIosIcon />
            </Button>
            :
            <div>&nbsp;</div>
            } 
            
            <TypographyHeader variant="h2" component="h2">
                Round {round.round_no}
            </TypographyHeader>

            {round.uid === selectLatestRound ?
            <div>&nbsp;</div>
            :               
            <Button  component={RouterLink} to={`/challenge-nanzo/${next}`}>
                 <ArrowForwardIosIcon />
            </Button>
            }
            
        </RoundNoHeaderPaper>
    )
}

const mapStateToProps = createStructuredSelector ({
    selectLatestRound: selectLatestRound
});

export default connect(mapStateToProps)(SplashNumber);
