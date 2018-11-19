import React from 'react'

import TableDisco from './TableDisco'
const buttonStyle =  {
    border: "none",
    backgroundColor: "#4CAF50",
    padding: "14px 14px",
    borderRadius: "5px",
    color: "GhostWhite",
    fontSize : "20px"
}
const RemoveButtonStyle =  {
    border: "none",
    backgroundColor: "red",
    padding: "14px 14px",
    borderRadius: "5px",
    color: "GhostWhite",
    fontSize : "10px",	
    float: "right"
}
class RowCat extends React.Component {
	constructor(props) {
	  super(props)
	  this.state = {
	    showResults: false,
	    discs : []
	  }
	}

	callApi = async () => {
	    const response = await fetch('/api/discos/' + this.props.id);
	    const body = await response.json();
	    if (response.status !== 200) throw Error(body.message);

	    return body;
	}

	showMore() {
		if(!this.state.showResults)
			this.callApi()
			  .then(res => this.setState({ discs: JSON.parse(res)}))
			  .catch(err => console.log(err));

		this.setState((state, props) => ({
		  showResults: !state.showResults
		}));
	}

	onRemove(props){
		if(window.confirm('Você quer remover a coleção? ' + props.name)){
			fetch('/api/colecoes/' + props.id, {
			   method: "DELETE"		   
			})
			.then(function(response){
				props.refreshCollectionList();
			})
			.catch(function(error) {
			    alert('Error ' + error);
			});
		}
	}

	render(){
		return(
				<div style={{border: '1px solid gray', borderLeft: '6px solid blue', padding : '15px 30px', backgroundColor : "AliceBlue"}}>			
					<li>
					 	<button onClick={this.showMore.bind(this)} style = {buttonStyle} >
					 		{this.state.showResults ? "v" : ">"}
					 	</button> <strong>{this.props.name}</strong>
					 	 <button style ={RemoveButtonStyle} onClick={() => this.onRemove(this.props)}> X </button>
					</li>
					 { this.state.showResults ? <TableDisco discs = {this.state.discs}/> : null }

				</div>
			);
	}
}

export default RowCat;
