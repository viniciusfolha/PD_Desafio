import React from 'react'
import {FilterContext} from './FilterContext';
class HeaderCat extends React.Component {

	render(){
		return(
				<div style={{ padding : '15px 30px'}}>
					<h1 className = 'titleHeaderCatalog'>Catálogo</h1>
					<FilterContext.Consumer>
						{({filter, onChange}) => (
							<input style={{float: "right"}} name ="filter" value = {filter} onChange = {onChange} type = "text"/>
						)}
					</FilterContext.Consumer>
				</div>
			);
	}
}


export default HeaderCat;
