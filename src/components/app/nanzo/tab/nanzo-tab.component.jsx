import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../../redux/user/selectors/user.selectors';

import SplashNumber from '../splash-number';
import Splash from '../splash';
import ProgressBar from '../../../../helper/progress-bar';

const NanzoTab = ({round, currentUser}) => (

    <div>
      <SplashNumber round={round} roundId={round.uid}/>
      {currentUser
      ? <Splash roundId={round.uid} entrant={currentUser.steemUsername} round={round}/>
      :<ProgressBar />
      }          
    </div>
  );

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(NanzoTab);