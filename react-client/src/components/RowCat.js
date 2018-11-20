import React from 'react'
import TableDisco from './TableDisco'
import './ButtonsStyle.css'
import './DivsStyle.css'

class RowCat extends React.Component {
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
				<div className='divCollection'>			
					<li>
					 	<button className = 'showMoreButton' onClick={this.showMore.bind(this)} >
					 		{this.state.showResults ? "v" : ">"}
					 	</button>
					 	<strong>{this.props.name}</strong>
					 	<button className = 'removeCollectionButton' onClick={() => this.onRemove(this.props)}> X </button>
					</li>
					 { this.state.showResults ? <TableDisco collectionID = {this.props.collectionID}/> : null }
				</div>
			);
	}
}

export default RowCat;
