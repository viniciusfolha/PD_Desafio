import React from 'react'
import './css/Modal.css';

class Modal extends React.Component {
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
