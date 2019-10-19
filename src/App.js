import React from 'react';

// import page templates components
import Header from './components/page-template/header/header.component';
import SubHeader from './components/page-template/sub-header/sub-header.component';


import './App.scss';

class App extends React.Component {

  render(){
    return (
      <div className="App">
      <div>
        <Header />
        <SubHeader />

         {/* Routes go here... */}

      </div>
  
      </div>
    );

  }
  
}

export default App;
