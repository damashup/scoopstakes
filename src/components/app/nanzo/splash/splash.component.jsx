import React from 'react';
import Fixtures from '../fixtures';
import SplashComplete from './component/status-complete/splash-round-complete.component';
import SplashNotEntered from './component/status-not-entered/splash-round-not-entered.component';
import SplashNotFinished from './component/status-not-finished/splash-round-not-finished.component';

const Splash = ({entrantResult, nanzoResult, roundId, round, entrant}) => {

    if(!entrantResult) return(<SplashNotEntered />);

    const roundStatus = round.round_status;
    
    if(roundStatus !== 'complete') return(
            <SplashNotFinished />
        ); 

    const player = entrantResult ? entrantResult.total_points: 'unknown error';
    const playerImage = entrantResult ? `https://steemitimages.com/u/${entrantResult.steem_entrant}/avatar` : null;
    const playerPoints = entrantResult ? entrantResult.total_points : -1;
    const opponent = 'Nanzo';
    const opponentImage = '/images/nanzoscoop.jpg';
    const opponentPoints = nanzoResult ? nanzoResult.total_points : -1 ;
  

    return (
        <div>
            <SplashComplete 
                player={player} 
                playerImage={playerImage}
                playerPoints={playerPoints}
                opponent={opponent}
                opponentImage={opponentImage}
                opponentPoints={opponentPoints}
            />
            <Fixtures 
                roundId={roundId} 
                entrant={entrant} 
                teams={round.teams} 
                scores={round.scores} 
                nanzoResult={nanzoResult} 
                entrantResult={entrantResult}
            />
        </div>
        )   
}
export default Splash;

