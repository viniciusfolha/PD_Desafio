import React from 'react'

class ListCat extends React.Component {
	
	createList(collection){
		return (
			collection.map(el=>
					<div style={{border: '1px solid gray', borderLeft: '6px solid blue', padding : '15px 30px', backgroundColor : "AliceBlue"}}>
					<li key={el.ID.toString()}>
					 <button className = 'bx--table-expand-v2__button'>+</button> {el.Name}
					</li>
				</div>
			)
		);
	}

	render(){
		return(
				<div>
					<ul>
					  {this.createList(this.props.colecoes)}
					</ul>
				</div>
			);
	}
}

export default ListCat;
