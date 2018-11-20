import React from 'react'

class DiscForm extends React.Component {
	constructor(props) {
		super(props)
		if(this.props.isToEdit){
		this.state = {
				showForm: false,
				id:this.props.disc.ID,
				colecaoID: this.props.disc.ColecaoID,
				name:this.props.disc.Name,
				author:this.props.disc.Author,
				published: this.props.disc.Published.substring(0, 10),
				description: this.props.disc.Description
			};
		}else{
			this.state = {
					showForm: false,
					id:undefined,
					colecaoID: this.props.disc.collectionID.toString(),
					name:'',
					author:'',
					published: '',
					description: ''
				};
		}
	}

	onSubmit = (event)=>{
		event.preventDefault();
		let { showForm, ...state } = this.state;
		var url, method;
		if(this.props.isToEdit){
			url = '/api/discos/' + state.id;
			method = 'PUT';
		}else{
			url = '/api/discos';
			method = 'POST';
		};
		console.log(url);
		console.log(method);
		fetch(url, {
		   method: method,
		   headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"},
		   body:  JSON.stringify(state)
		})
		.then((response)=>{
			if(!response.ok){
				throw new Error(response.statusText)
			}
			this.props.refreshDiscsList();
			this.props.hideModal(false);
		})
		.catch((error) =>{
		    alert('Error: '+ error);
		});	
	};

	onChange = (event) =>{
		this.setState({[event.target.name]: event.target.value});
	};

	render(){
		return(
				<div style={{ padding : '2px 30px'}}>
					<h1>Disco</h1>
					<form>
						Nome: <input name ="name" value = {this.state.name} onChange = {this.onChange} type = "text"/><br/>
						Autor: <input name ="author" value = {this.state.author} onChange = {this.onChange} type = "text"/><br/>
						Data: <input name ="published" value = {this.state.published} onChange = {this.onChange} type = "date"/><br/>
						Descrição: <textarea name ="description" value = {this.state.description} onChange = {this.onChange} />
					</form>
					<button onClick={this.onSubmit}> Enviar </button>
					<button onClick={() => this.props.hideModal(false)}> Close	</button>
				</div>
			);
	}
}

export default DiscForm;
