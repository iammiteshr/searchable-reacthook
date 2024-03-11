import React, {useState,useEffect}from "react";
import './App.css';
import SearchField from './components/SearchField';	
import ProductList from './components/ProductList';	
import 'bootstrap/dist/css/bootstrap.min.css';
const product = [
  // "Siri",
  // "Alexa",
  // "Google",
  // "Facebook",
  // "Twitter",
  // "Linkedin",
  // "Sinkedin"
  {
		"id":1,
		"name":"sony",
		"price":4000,
		"rating":3.5,
		"feature":{
			"ram":"4 GB",
			"rom":"64 GB",
		}
	},
	{
		"id":2,
		"name":"moto",
		"price":4000,
		"rating":2.8,
		"feature":{
			"ram":"4 GB",
			"rom":"64 GB",
		}
	},
	{
		"id":3,
		"name":"galaxy",
		"price":4000,
		"rating":4.6,
		"feature":{
			"ram":"4 GB",
			"rom":"64 GB",
		}
	},
	{
		"id":4,
		"name":"lenovo",
		"price":4000,
		"rating":4.2,
		"feature":{
			"ram":"4 GB",
			"rom":"64 GB",
		}
	}
];

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const handleChange = e => {
		setSearchTerm(e.target.value);
	};

	useEffect(() => {
		const results = product.filter(person =>
		  person.name.toLowerCase().includes(searchTerm)
		);
		setSearchResults(results);
	}, [searchTerm]);

	return (
		<div className="App">
		  <SearchField searchTerm={searchTerm} handleChange={handleChange}/>
		  <ProductList searchResults={searchResults}/>
		   
		</div>
	);
}


export default App;
