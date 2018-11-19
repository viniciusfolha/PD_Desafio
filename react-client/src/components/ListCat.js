import React from 'react'

import RowCat from './RowCat'
import Modal from './Modal'
import CollectionForm from './CollectionForm'
const buttonStyle =  {
    display: "block",
    width: "100%",
    border: "none",
    backgroundColor: "SlateGrey",
    padding: "7px 7px",
    cursor: "pointer",
    textAlign: "center",
    borderRadius: "15px",
    color: "GhostWhite",
    fontSize : "20px"
}

class ListCat extends React.Component {
	
	constructor(props) {
	  super(props)
	  this.state = {
	    showForm: false,
	    colecoes: []
	  }
	  this.hideModal = this.hideModal.bind(this);
	  this.refreshCollectionList = this.refreshCollectionList.bind(this);
	}

	componentDidMount() {
		this.refreshCollectionList();
	}

	refreshCollectionList(){
		this.getCollection()
		  .then(res => this.setState({ colecoes: JSON.parse(res)}))
		  .catch(err => console.log(err));
	}

	getCollection = async () => {
	  const response = await fetch('/api/colecoes');
	  const body = await response.json();
	  if (response.status !== 200) throw Error(body.message);

	  return body;
	};

	createListCollection(collection){
		return (
			collection.map(el=>
				<RowCat id = {el.ID} name= {el.Name} refreshCollectionList = {this.refreshCollectionList} />
			)
		);
	}

	hideModal(val){
		this.setState({showForm: false})
	}

	createCollectionForm(showForm){
		this.setState({showForm: showForm});
	}

	render(){
		return(
				<div>
					<ul>
					  {this.createListCollection(this.state.colecoes)}
					</ul>

					{ (this.state.showForm) ? 
						<Modal>
							<CollectionForm showModal = {this.hideModal} refreshCollectionList = {this.refreshCollectionList}/>
						 </Modal>
						 : null
					}

					<button style = {buttonStyle} onClick={() => this.createCollectionForm(true)} >
						Nova Coleção
					</button>
				</div>
			);
	}
}

export default ListCat;
