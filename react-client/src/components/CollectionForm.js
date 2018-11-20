import React from 'react'
import './css/ButtonsStyle.css';

class CollectionForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ''
		};
	}

	onSubmit = (event) =>{
		event.preventDefault();
		fetch('/api/colecoes', {
		   method: "POST",
		   headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"},
		   body:  JSON.stringify(this.state)
		})
		.then((response)=>{
			if(!response.ok) {
				throw new Error('Network response was not ok.');
			}
			this.props.refreshCollectionList();
			this.props.showModal(false);
		})
		.catch(function(error) {
		    alert('Error '+error);
		});					
	};

	hideModal = () => {
		this.props.showModal(false);
	};

	onChange = (event) =>{
		this.setState({[event.target.name]: event.target.value});
	};

	render(){
		return(
				<div style={{ padding : '5px 5px'  ,textAlign: "center"}}>
					<h2>Nova Coleção</h2>
					Nome: <input name ="name" value = {this.state.name} onChange = {this.onChange} type = "text"/>
					<br/>
					<button className = 'acceptButton'  onClick={this.onSubmit}> Criar </button>
					<button className = 'closeButton' onClick={this.hideModal}> Cancelar	</button>
				</div>
			);
	}
}

export default CollectionForm;
