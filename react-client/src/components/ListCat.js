import React from 'react'

import RowCat from './RowCat'

class ListCat extends React.Component {
	
	constructor(props) {
	  super(props)
	  this.state = {
	    showResults: false,
	  }
	}

	createProject() {
		this.setState((state, props) => ({
		  showResults: !state.showResults
		}));
	}

	createList(collection){
		return (
			collection.map(el=>
				<RowCat algo = {el.ID} teste= {el.Name} />
			)
		);
	}


	render(){
		return(
				<div>
					<ul>
					  {this.createList(this.props.colecoes)}
					</ul>
				</div>
			);
	}
}

export default ListCat;
