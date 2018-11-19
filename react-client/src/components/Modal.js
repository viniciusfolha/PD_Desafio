import React from 'react'
import './Modal.css';

class Modal extends React.Component {
	constructor(props) {
	  super(props)
	}


	render(){

		return (
		  <div className='modal display-block'>
		    <section className='modalmain'>
		    {this.props.children}
		    </section>
		  </div>
		);
	}
}

export default Modal;
