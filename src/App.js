import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {checkUserSession} from './redux/user/actions/check-user-session/check-user-session';


import './App.scss';
// import MainPageContainer from './components/page-templates/main-page/main-page.container';
import {Main} from './layouts'

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const App = ({checkUserSession}) => {

  useEffect(() => {checkUserSession()}, [checkUserSession]);
  
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
            {/* <MainPageContainer /> */}
            <Main />
        </ThemeProvider>
      
  
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(null,mapDispatchToProps)(App);
