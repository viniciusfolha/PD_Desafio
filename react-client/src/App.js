import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TableCat from './components/TableCat';
import HeaderCat from './components/HeaderCat';
import ListCat from './components/ListCat';

class App extends Component {
    state = {
      colecoes: []
    };

    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ colecoes: JSON.parse(res)}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
      const response = await fetch('/api/colecoes');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);

      return body;
  };



  render() {
    console.log(this.state.colecoes);
    return (
      <div>
            <HeaderCat/>
            <ListCat colecoes = {this.state.colecoes}/>
      </div>
    );
  }
}

export default App;
