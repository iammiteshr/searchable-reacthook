import React from 'react';
import './styles/SearchField.css';
export default function SearchField(props) {
	return(
		<>	
			<h2>Search Products</h2>
			<input
			    type="text"
			    placeholder="Search"
			    value={props.searchTerm}
			    onChange={props.handleChange}
		   />
		</>
	);
}