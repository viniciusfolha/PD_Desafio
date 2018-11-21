import React from 'react'
import TableDisc from './TableDisc'
import './css/ButtonsStyle.css'
import './css/DivsStyle.css'
import {FilterContext} from './FilterContext';

class RowCollection extends React.Component {
	constructor(props) {
	  super(props)
	  this.state = {
	    showResults: false
	  }
	}

	showMore() {
		this.setState((state, props) => ({
		  showResults: !state.showResults
		}));
	}

	onRemove(props){
		if(window.confirm('Você quer remover a coleção? ' + props.name)){
			fetch('/api/colecoes/' + props.collectionID, {
			   method: "DELETE"		   
			})
			.then(function(response){
				if(!response.ok)
					throw new Error(response.statusText)
				props.refreshCollectionList();
			})
			.catch(function(error) {
			    alert('Error ' + error);
			});
		}
	}

	render(){
		return(
			<FilterContext.Consumer>
				{
					({ filter }) => (
					<div className='divCollection'>		
						<li>
						 	<button className = 'showMoreButton' onClick={this.showMore.bind(this)} >
						 		{this.state.showResults ? "v" : ">"}
						 	</button>
						 	<strong>{this.props.name}</strong>
						 	<button className = 'removeCollectionButton' onClick={() => this.onRemove(this.props)}> X </button>
						</li>
						 { this.state.showResults ? <TableDisc collectionID = {this.props.collectionID} filter = {filter}/> : null }
					</div>
					)
				}
			</FilterContext.Consumer>	
			);
	}
}

export default RowCollection;
