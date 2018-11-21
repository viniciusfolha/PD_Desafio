import React from 'react';
import './css/ButtonsStyle.css';
import './css/DivsStyle.css';

class RowDisc extends React.Component {

	render(){
		return(
			<div key = {this.props.collectionID +'.'+ this.props.disc.ID} className='divDiscCell'>
			<div className = 'divDiscButton' >
				<button className = 'editButton' onClick={(event) => this.props.onEdit(this.props.disc)}>Edit</button>
				<button className = 'deleteDiscButton' onClick={(event) => this.props.onRemove(this.props.disc)}>Remove</button>
			</div>
			<h3><strong>Nome:</strong> {this.props.disc.Name}</h3>
			<p><strong>Author:</strong> {this.props.disc.Author}</p>
			<p><strong>Published:</strong> {this.props.disc.Published}</p>
			<p><strong>Description:</strong> {this.props.disc.Description}</p>
			</div>
			);
	}
}


export default RowDisc;