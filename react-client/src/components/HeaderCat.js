import React from 'react'

class HeaderCat extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		  search : '',
		}
	}
	onChange = (event) =>{
		this.setState({[event.target.name]: event.target.value.substring(0, 30)}, );
		this.props.changeFilter(event.target.value.substring(0, 30));
	};

	render(){
		return(
				<div style={{ padding : '15px 30px'}}>
					<h1 style={titleText}>Catálogo</h1>
					<input style={{float: "right"}}name ="search" value = {this.state.search} onChange = {this.onChange} type = "text"/>
				</div>
			);
	}
}
const titleText =  {
    fontSize: 20,
    fontWeight: 'bold',
    display: 'inline'
  };

export default HeaderCat;
