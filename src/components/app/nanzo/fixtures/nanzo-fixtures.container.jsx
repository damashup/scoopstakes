import React from 'react'
import Grid from '@material-ui/core/Grid';
import {TypographyHeader} from './nanzo-fixtures.styles';
import NanzoFixtureItem from '../fixture-item';

const NanzoFixtures = ({teams, scores, nanzoResult, entrantResult}) => {

    const games = [
        {id: `1`, homeTeam: teams[0], awayTeam: teams[1], htScore: scores[0], atScore: scores[1], 
            nanzoHtGuess: nanzoResult.game_predictions[0], nanzoAtGuess: nanzoResult.game_predictions[1], 
            entrantHtGuess: entrantResult.game_predictions[0], entrantAtGuess: entrantResult.game_predictions[1],
            entrantGamePoints: entrantResult.points_list[0],
            nanzoGamePoints: nanzoResult.points_list[0]
        },
        {id: `2`, homeTeam: teams[2], awayTeam: teams[3], htScore: scores[2], atScore: scores[3], 
            nanzoHtGuess: nanzoResult.game_predictions[2], nanzoAtGuess: nanzoResult.game_predictions[3], 
            entrantHtGuess: entrantResult.game_predictions[2], entrantAtGuess: entrantResult.game_predictions[3],
            entrantGamePoints: entrantResult.points_list[1],
            nanzoGamePoints: nanzoResult.points_list[1]
        },
        {id: `3`, homeTeam: teams[4], awayTeam: teams[5], htScore: scores[4], atScore: scores[5], 
            nanzoHtGuess: nanzoResult.game_predictions[4], nanzoAtGuess: nanzoResult.game_predictions[5], 
            entrantHtGuess: entrantResult.game_predictions[4], entrantAtGuess: entrantResult.game_predictions[5],
            entrantGamePoints: entrantResult.points_list[2],
            nanzoGamePoints: nanzoResult.points_list[2]
        },
        {id: `4`, homeTeam: teams[6], awayTeam: teams[7], htScore: scores[6], atScore: scores[7], 
            nanzoHtGuess: nanzoResult.game_predictions[6], nanzoAtGuess: nanzoResult.game_predictions[7], 
            entrantHtGuess: entrantResult.game_predictions[6], entrantAtGuess: entrantResult.game_predictions[7],
            entrantGamePoints: entrantResult.points_list[3],
            nanzoGamePoints: nanzoResult.points_list[3]
        },
        {id: `5`, homeTeam: teams[8], awayTeam: teams[9], htScore: scores[8], atScore: scores[9], 
            nanzoHtGuess: nanzoResult.game_predictions[8], nanzoAtGuess: nanzoResult.game_predictions[9], 
            entrantHtGuess: entrantResult.game_predictions[8], entrantAtGuess: entrantResult.game_predictions[9],
            entrantGamePoints: entrantResult.points_list[4],
            nanzoGamePoints: nanzoResult.points_list[4]
        }
        ];
                       
    return (
       <div>

            <TypographyHeader variant="h6" component="h2">Fixtures</TypographyHeader>
            <Grid container spacing={2}>            
            {games.map(game => (
                
                        <NanzoFixtureItem 
                            homeTeam={game.homeTeam}
                            awayTeam={game.awayTeam}
                            htScore={game.htScore}
                            atScore={game.atScore}
                            entrantHtGuess={game.entrantHtGuess}
                            entrantAtGuess={game.entrantAtGuess}
                            nanzoHtGuess={game.nanzoHtGuess}
                            nanzoAtGuess={game.nanzoAtGuess}
                            entrantGamePoints={game.entrantGamePoints}
                            nanzoGamePoints ={game.nanzoGamePoints}
                            key={game.id}
                        /> 
                            
            ))}
            </Grid>

       </div>

           

            
    )
}

export default NanzoFixtures;