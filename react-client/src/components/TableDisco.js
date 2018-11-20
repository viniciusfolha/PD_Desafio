import React from 'react'
import Modal from './Modal.js'
import DiscForm from './DiscForm.js'
import './ButtonsStyle.css';
import './DivsStyle.css'


class TableDisco extends React.Component {

	constructor(props) {
	  super(props)
	  this.state = {
	    showForm: false,
	    isToEdit: false,
	    discs : [],
	    discForm : {}
	  }
	  this.hideModal = this.hideModal.bind(this);
	  this.refreshDiscsList = this.refreshDiscsList.bind(this);
	  this.onEdit = this.onEdit.bind(this);
	}

	componentDidMount() {
		this.refreshDiscsList();
	}

	refreshDiscsList(){
		this.getDiscsById(this.props.collectionID)
		.then(res => this.setState({ discs: JSON.parse(res)}))
		.catch(err => console.log(err));
	}

	getDiscsById = async (id) => {
	    const response = await fetch('/api/discos/' + id);
	    const body = await response.json();
	    if (response.status !== 200) throw Error(body.message);
	    return body;
	}

	filterDisc = (discFilter) => {
	    let filteredDiscs = this.state.discs
	    filteredDiscs = filteredDiscs.filter((disc) => {
	      return (disc.Name.indexOf(discFilter) !== -1) || (disc.Description.indexOf(discFilter) !== -1) || (disc.Author.indexOf(discFilter) !== -1) ; 
	    })
	    return filteredDiscs;
	}

	onRemove(props){
		if(window.confirm('Você quer remover o disco? ' + props.Name)){
			fetch('/api/discos/' + props.ID, {
			   method: "DELETE"		   
			})
			.then((response)=>{
				if(!response.ok) {
					throw new Error('Network response was not ok.');
				}
				this.refreshDiscsList();
			})
			.catch(function(error) {
			    alert('Error ' + error);
			});
		}
	}

	onEdit(props){
		this.setState({discForm: props, isToEdit: true}, () => {this.hideModal(true)});
	}

	hideModal(val){
		this.setState({showForm: val})
	}

	createList(discsFiltered){
		return (
			discsFiltered.map(el=>
				<div key = {this.props.collectionID +'.'+ el.ID} className='divDiscCell'>
				<div className = 'divDiscButton' >
					<button className = 'editButton' onClick={(event) => this.onEdit(el)}>Edit</button>
					<button className = 'deleteDiscButton' onClick={(event) => this.onRemove(el)}>Remove</button>
				</div>
				<h3><strong>Nome:</strong> {el.Name}</h3>
				<p><strong>Author:</strong> {el.Author}</p>
				<p><strong>Published:</strong> {el.Published}</p>
				<p><strong>Description:</strong> {el.Description}</p>
				</div>
			)
		);
	}

	render(){
		let newDisc = {
			discForm : {collectionID: this.props.collectionID}, 
			isToEdit: false
		};

		var filteredDiscs = this.filterDisc(this.props.filter);
		return(
				<div className='divTableDisc'>
					{this.createList(filteredDiscs)}

					{ (this.state.showForm) ? 
						<Modal>
							<DiscForm hideModal = {this.hideModal} refreshDiscsList = {this.refreshDiscsList} 
							disc = {this.state.discForm} isToEdit = {this.state.isToEdit}/>
						 </Modal>
						 : null
					}
					<button className="createDiscButton" onClick={() => {this.setState(newDisc);this.hideModal(true)}}> Novo Disco </button> 
				</div>
			);
	}
}

export default TableDisco;
