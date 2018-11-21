import React, { Fragment,Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderCat from './components/HeaderCat';
import TableCollection from './components/TableCollection';


const FilterContext = React.createContext({filter: ''})

class App extends Component {
	state = {
		filter: ''
	}
	changeFilter = filter => this.setState({filter});

	render() {
		const {changeFilter} = this
		const value = {...this.state,changeFilter}
		return (
			<div>
				<FilterContext.Provider value={value}>
					<FilterContext.Consumer>
					{
						({ changeFilter, filter }) => (
							<Fragment>
								<HeaderCat {...{changeFilter}}/>
								<TableCollection {...{filter}}/>
							</Fragment>
						)
					}
					</FilterContext.Consumer>
				</FilterContext.Provider>
			</div>
		);
	}
}

export default App;
