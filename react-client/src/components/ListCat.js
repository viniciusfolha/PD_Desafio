import React from 'react'

import RowCat from './RowCat'
import Modal from './Modal'
import CollectionForm from './CollectionForm'
import './ButtonsStyle.css'

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

	hideModal(val){
		this.setState({showForm: val})
	}

	render(){
		return(
				<div>
					<ul>
					  {this.state.colecoes.map(el=>
					  		<RowCat collectionID = {el.ID} key = {el.ID} name= {el.Name} refreshCollectionList = {this.refreshCollectionList} />
							)
					  }
					</ul>

					{ (this.state.showForm) ? 
						<Modal>
							<CollectionForm showModal = {this.hideModal} refreshCollectionList = {this.refreshCollectionList}/>
						 </Modal>
						 : null
					}

					<button className ='createCollectionButton' onClick={() => this.hideModal(true)} >
						Nova Coleção
					</button>
				</div>
			);
	}
}

export default ListCat;
