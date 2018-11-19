import React from 'react'

class CollectionForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ''
		};

		this.onChange = (event) =>{
			const state = Object.assign({},this.state);
			const name = event.target.name;
			state[name] = event.target.value;
			this.setState(state);
		};

		this.hideModal = () => {
			this.props.showModal(false);
		};

		this.onSubmit = (event) =>{
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
	}

	render(){
		return(
				<div style={{ padding : '5px 5px'  ,textAlign: "center"}}>
					<h2>Nova Coleção</h2>
					Nome: <input name ="name" value = {this.state.name} onChange = {this.onChange} type = "text"/>
					<br/>
					<button onClick={this.onSubmit}> Enviar </button>
					<button onClick={this.hideModal}> Close	</button>
				</div>
			);
	}
}

export default CollectionForm;
