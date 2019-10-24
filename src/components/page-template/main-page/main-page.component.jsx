import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


// import page templates components
import Header from './header/header.component';
import SubHeader from './sub-header/sub-header.component';

// import pages
import SignInPage from '../../sign-in/sign-in-page.component';
import SignUpPage from '../../sign-up/sign-up-page.component';
import ProfilePage from '../../profile/profile-page.component'



const MainPage = ({currentUser}) => (
      <div>
        <Header />
        <SubHeader />
        <Switch>
          <Route exact path='/signin' render={() => currentUser ? <Redirect to='/profile' />: <SignInPage />} />
          <Route exact path='/signup' render={() => currentUser ? <Redirect to='/profile' />: <SignUpPage />} />
          <Route exact path='/profile' component={ProfilePage} />
        </Switch>
      </div>
)

export default MainPage;
