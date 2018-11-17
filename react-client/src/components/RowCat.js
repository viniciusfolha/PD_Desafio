import React from 'react'

import TableDisco from './TableDisco'
class RowCat extends React.Component {
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

	render(){
		return(
				<div style={{border: '1px solid gray', borderLeft: '6px solid blue', padding : '15px 30px', backgroundColor : "AliceBlue"}}>
					<li key={this.props.algo.toString()}>
					 	<button onClick={this.createProject.bind(this)} className = 'bx--table-expand-v2__button'>+</button> {this.props.teste}
					</li>
					 { this.state.showResults ? <TableDisco/> : null }
				</div>
			);
	}
}

export default RowCat;
