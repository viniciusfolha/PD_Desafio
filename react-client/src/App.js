import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderCat from './components/HeaderCat';
import ListCat from './components/ListCat';

class App extends Component {

  render() {
    return (
      <div>
            <HeaderCat/>
            <ListCat />
      </div>
    );
  }
}

export default App;
