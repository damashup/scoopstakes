import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';



// import page templates components
import Header from './components/page-template/header/header.component';
import SubHeader from './components/page-template/sub-header/sub-header.component';

// import pages
import SignInPage from './components/sign-in/sign-in-page.component';
import SignUpPage from './components/sign-up/sign-up-page.component';


import {checkUserSession} from './redux/user/user.actions'


import './App.scss';

const App = ({checkUserSession}) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


    return (
      <div className="App">
      <div>
        <Header />
        <SubHeader />
        <Switch>
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/signup' component={SignUpPage} />
        </Switch>

      </div>
  
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(null,mapDispatchToProps)(App);
