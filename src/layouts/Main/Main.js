import React, { useState } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import {selectCurrentUser} from '../../redux/user/selectors/user.selectors';

import { Switch, Route, Redirect } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import { Sidebar, Topbar, Footer } from './components';

// import pages
import {Leaderboards, Play, Profile, Results, SignIn, SignUp } from '../../components/pages';
import ChallengeNanzoPage from '../../components/pages/challenge-nanzo/challenge-nanzo.component';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));

const Main = props => {
  const { currentUser } = props;

  console.log(currentUser);

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
      <Switch>
          <Route exact path='/challenge-nanzo' component={ChallengeNanzoPage} />
          <Route path='/challenge-nanzo/:challengeNanzoRoundId' component={ChallengeNanzoPage} />
          {/* <Route exact path={`${match.path}`}  component={ChallengeNanzoPage} />    
            <Route path={`${match.path}/:challengeNanzoRoundId`} component={ChallengeNanzoPage} /> */}
          <Route exact path='/leaderboards' component={Leaderboards} />
          <Route exact path='/play' component={Play} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/results' render={() => currentUser ? <Results /> : <SignIn />} />
          <Route exact path='/signin' render={() => currentUser ? <Redirect to='/profile' />: <SignIn />} />
          <Route exact path='/signup' render={() => currentUser ? <Redirect to='/profile' />: <SignUp />} />
        </Switch>
        <Footer />
      </main>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Main);
