import React from 'react'
	const buttonStyle =  {
	    display: "block",
	    width: "100%",
	    border: "none",
	    backgroundColor: "#4CAF50",
	    padding: "5px 5px",
	    cursor: "pointer",
	    textAlign: "center",
	    borderRadius: "15px",
	    color: "GhostWhite",
	    fontSize : "20px"
	}
	const divButtons =  {
		display: "block",
	    width: "100%",
	    backgroundColor: "Cornsilk",
	    padding: "0px 0px",
	    cursor: "pointer",
	    textAlign: "right",
	    borderRadius: "8px",
	    color: "GhostWhite",
	    fontSize : "15px"
	}
	const editButtonStyle =  {
	    backgroundColor: "#ffc107",
	    padding: "0px 10px",
	    cursor: "pointer",
	    textAlign: "center",
	    borderRadius: "8px",
	    color: "GhostWhite",
	    fontSize : "15px"
	}

	const deleteButtonStyle =  {
	    backgroundColor: "#dc3545",
	    padding: "0px 10px",
	    cursor: "pointer",
	    textAlign: "center",
	    borderRadius: "8px",
	    color: "GhostWhite",
	    fontSize : "15px"
	}
class TableDisco extends React.Component {

	createList(discs){
		var disc = discs[0];
		var ownProperties = [];
		if(disc !== undefined){
			for (var prop in disc) {
			    if (disc.hasOwnProperty(prop)) {
			        ownProperties.push(prop);
			    }else{
			    	console.log(prop);
			    }
			}
		}
		
		return (
			discs.map(el=>
				<div style={{border: '1px solid gray', borderLeft: '6px solid blue', padding : '5px 15px', backgroundColor : "Cornsilk"}}>
				<div style = {divButtons} >
					<button style = {editButtonStyle}>Edit</button>
					<button style = {deleteButtonStyle}>Remove</button>
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
		return(
				<div style={{ padding : '2px 30px'}}>
					{this.createList(this.props.discs)}
					<div style = {buttonStyle} ><button style = {buttonStyle}>Novo Disco</button> 	</div>
				</div>
			);
	}
}

export default TableDisco;
