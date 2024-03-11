import React from 'react';
import './styles/ProductList.css';
import ProductRow from './ProductRow';
export default function ProductList (props) {
	return(
		<div className="product-list">
			{props.searchResults.map(item => (
			  <ProductRow key={item.id} name={item.name} price={item.price} rating={item.rating} feature={item.feature}/>
			  // <li key={item.id}>{item.name}</li>
			))}
		</div>
	);
}