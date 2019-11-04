import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


// import page templates components
import Header from './header/header.component';
import SubHeader from './sub-header/sub-header.component';

// import pages
import LeaderboardsPage from '../../pages/leaderboards/leaderboards-page.component';
import PlayNowPage from '../../pages/play-now/play-now-page.component';
import ProfilePage from '../../pages/profile/profile-page.component';
import SignInPage from '../../pages/sign-in/sign-in-page.component';
import SignUpPage from '../../pages/sign-up/sign-up-page.component';
import ResultsPage from '../../pages/results/results.component';


const MainPage = ({currentUser}) => (
      <div>
        <Header />
        <SubHeader />
        <Switch>
          <Route exact path='/leaderboards' component={LeaderboardsPage} />
          <Route exact path='/play' component={PlayNowPage} />
          <Route exact path='/profile' component={ProfilePage} />
          <Route exact path='/results' render={() => currentUser ? <ResultsPage /> : <SignInPage />} />
          <Route exact path='/signin' render={() => currentUser ? <Redirect to='/profile' />: <SignInPage />} />
          <Route exact path='/signup' render={() => currentUser ? <Redirect to='/profile' />: <SignUpPage />} />
        </Switch>
      </div>
)

export default MainPage;
