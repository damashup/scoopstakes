import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import Fixtures from '../fixtures';

// import VersusNanzoFixtures from '../VersusNanzoFixtures';

import {useStyles, PaperDiv, TypographyHeader, HeaderRow, VersusAvatar, TypographyHeaderNotEntered} from './splash.styles';

const Splash = ({entrantResult, nanzoResult, roundId, round, entrant}) => {
    const classes = useStyles();
    const nanzoPoints = nanzoResult ? nanzoResult.total_points : -1 ;
    const {teams, scores} = round ? round : null;

    if(!entrantResult) return(
        <PaperDiv>
            <Grid container justify="center" alignItems="center">
                <TypographyHeaderNotEntered variant="h6" component="h2">You did not enter this round</TypographyHeaderNotEntered>
            </Grid>
        </PaperDiv>
        
        );

    let userButtonClass, nanzoButtonClass, resultText, resultEmoji;

    if(entrantResult.total_points > nanzoPoints){
        userButtonClass = classes.buttonWon;
        nanzoButtonClass = classes.buttonLost;
        resultText = 'You won!';
        resultEmoji = <InsertEmoticonIcon fontSize='inherit' />;
    } else if (entrantResult.total_points < nanzoPoints){
        userButtonClass = classes.buttonLost;
        nanzoButtonClass = classes.buttonWon;
        resultText = 'Nanzo won!';
        resultEmoji = <SentimentVeryDissatisfiedIcon  fontSize='inherit' />;
    } else {
        userButtonClass = '';
        nanzoButtonClass = '';
        resultText = `It's a draw!`;
        resultEmoji = <ThumbsUpDownIcon fontSize='inherit' />;
    }

    return (
        <div>
            <PaperDiv square>
                <Grid container justify="center" alignItems="center">
                    <HeaderRow>
                        <VersusAvatar alt="User Avatar" src={`https://steemitimages.com/u/${entrantResult.steem_entrant}/avatar`} className={classes.bigAvatar}/>
                            <TypographyHeader variant="h1" component="h2">You</TypographyHeader>
                        <Button variant="outlined" color='primary' className={userButtonClass}>
                            <TypographyHeader variant="h1" component="h2">{entrantResult.total_points}</TypographyHeader>
                        </Button>      
                    </HeaderRow>

                    <HeaderRow>
                        <VersusAvatar alt="Nanzo Avatar" src="/images/nanzoscoop.jpg" className={classes.bigAvatar}/>

                        <TypographyHeader variant="h1" component="h2">Nanzo</TypographyHeader>
                        <Button  variant="outlined" color='primary' className={nanzoButtonClass}>
                            <TypographyHeader variant="h1" component="h2">{nanzoPoints}</TypographyHeader>
                        </Button>  
                    </HeaderRow>                       
                </Grid> 

                <HeaderRow>
                    <TypographyHeader variant="h2" component="h2">
                        <div>{resultText} &nbsp;</div>
                        <div>{resultEmoji}</div>
                    </TypographyHeader>   
                </HeaderRow>


            </PaperDiv>
            <Fixtures roundId={roundId} entrant={entrant} teams={round.teams} scores={round.scores} nanzoResult={nanzoResult} entrantResult={entrantResult}/>
        </div>
        )
    
}

export default Splash;

