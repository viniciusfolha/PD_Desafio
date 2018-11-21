import React from 'react'
import Modal from './Modal.js'
import DiscForm from './DiscForm.js'
import RowDisc from './RowDisc.js'
import './css/ButtonsStyle.css'
import './css/DivsStyle.css'


class TableDisc extends React.Component {

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
	  this.onRemove = this.onRemove.bind(this);
	}

	componentDidMount() {
		this.refreshDiscsList();
	}

	refreshDiscsList(){
		this.getDiscsByCollectionId(this.props.collectionID)
		.then(res => this.setState({ discs: JSON.parse(res)}))
		.catch(err => console.log(err));
	}

	getDiscsByCollectionId = async (id) => {
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

	createDiscsRow(discsFiltered){
		return (
			discsFiltered.map(el=>	(
				<RowDisc key = {this.props.collectionID + '.' + el.ID} disc = {el} collectionID = {this.props.collectionID} onEdit = {this.onEdit} onRemove = {this.onRemove}/>
				))
		);
	}

	render(){
		let newDisc = {
			discForm : {collectionID: this.props.collectionID}, 
			isToEdit: false
		};

		var filteredDiscs = (this.props.filter ==='' || this.props.filter===undefined)? this.state.discs : this.filterDisc(this.props.filter);
		return(
				<div className='divTableDisc'>
					{this.createDiscsRow(filteredDiscs)}

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

export default TableDisc;
