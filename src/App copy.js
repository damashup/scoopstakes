import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'



// import page templates components
import Header from './components/page-template/header/header.component';
import SubHeader from './components/page-template/sub-header/sub-header.component';

// import pages
import SignInPage from './components/pages/signin/sign-in-page.component';
import SignUpPage from './components/pages/signup/sign-up-page.component';
import ProfilePage from './components/profile/profile-page.component'


import { selectCurrentUser } from './redux/user/selectors/user.selectors';
import {checkUserSession} from './redux/user/actions/check-user-session/check-user-session'


import './App.scss';

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


    return (
      <div className="App">
      <div>
        <Header />
        <SubHeader />
        <Switch>
          <Route exact path='/signin' render={() => currentUser ? <Redirect to='/profile' />: <SignInPage />} />
          <Route exact path='/signup' render={() => currentUser ? <Redirect to='/profile' />: <SignUpPage />} />
          <Route exact path='/profile' component={ProfilePage} />
        </Switch>

      </div>
  
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
