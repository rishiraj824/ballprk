import React, { Component } from 'react';
import Affiliate from './components/Affiliate';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Affiliate />
        <Navigation/>
      </div>
    );
  }
}

export default App;
