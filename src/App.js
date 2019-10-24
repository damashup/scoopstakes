import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {checkUserSession} from './redux/user/user.actions'


import './App.scss';
import MainPageContainer from './components/page-template/main-page/main-page.container';

const App = ({checkUserSession}) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


    return (
      <div className="App">
      <MainPageContainer />
  
      </div>
    );
}



const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(null,mapDispatchToProps)(App);
