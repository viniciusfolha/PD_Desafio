import React, { Fragment,Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderCat from './components/HeaderCat';
import TableCollection from './components/TableCollection';
import {FilterContext} from './components/FilterContext';

class App extends Component {
	constructor(props) {
	  super(props);

	  this.onChange = (event) =>{
	  	this.setState({[event.target.name]: event.target.value.substring(0, 30)}, );
	  };

	  this.state = {
	  	filter: '',
	  	onChange: this.onChange,
	  }
	}

	render() {
		return (
			<FilterContext.Provider value={this.state}>
				<div>				
					<HeaderCat/>
					<TableCollection/>
				</div>
			</FilterContext.Provider>
		);
	}
}

export default App;
