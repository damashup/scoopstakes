import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


// import page templates components
import Header from './header/header.component';
import SubHeader from './sub-header/sub-header.component';

// import pages
import LeaderboardsPage from '../../pages/leaderboards/leaderboards-page.component';
import PlayNowPage from '../../pages/play/play-now-page.component';
import ProfilePage from '../../pages/profile/profile-page.component';
import SignInPage from '../../pages/signin/sign-in-page.component';
import SignUpPage from '../../pages/signup/sign-up-page.component';
import ResultsPage from '../../pages/results/results.component';
import Sidebar from './Sidebar';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';


const MainPage = ({currentUser}) => {

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
      <div>
        <Header />
        <SubHeader />
        <Sidebar onClose={handleSidebarClose} open={shouldOpenSidebar} variant={isDesktop ? 'persistent' : 'temporary'}/>
        <Switch>
          <Route exact path='/leaderboards' component={LeaderboardsPage} />
          <Route exact path='/play' component={PlayNowPage} />
          <Route exact path='/profile' component={ProfilePage} />
          <Route exact path='/results' render={() => currentUser ? <ResultsPage /> : <SignInPage />} />
          <Route exact path='/signin' render={() => currentUser ? <Redirect to='/profile' />: <SignInPage />} />
          <Route exact path='/signup' render={() => currentUser ? <Redirect to='/profile' />: <SignUpPage />} />
        </Switch>
      </div>
)}

export default MainPage;
