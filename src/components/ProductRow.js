import React, {useState}from 'react';
import './styles/ProductRow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

export default function ProductRow (props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return(
		<div className="product-row" onClick={handleShow}>
			<p>
				{props.name}
				{/*+ " "<span>Rs{props.price +" "}</span>
				<span>{props.rating +" "}</span>*/}
			</p>
			<div onClick={e => e.stopPropagation()}>

				<Modal
					show={show}
			        onHide={handleClose}
			        backdrop="static"
			        keyboard={false}
					aria-labelledby="example-modal-sizes-title-sm"
				>
					<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-sm">
					 	{props.name}
					</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Price: <span>{' '+props.price}</span></p>
						<p>Rating: <span>{' '+props.rating}</span></p>
						<div>
							<h5>Feature</h5>
							<p>RAM: <span>{' '+props.feature.ram}</span></p>
							<p>ROM: <span>{' '+props.feature.rom}</span></p>
						</div>
					</Modal.Body>
				</Modal>
			</div>
		</div>
	);
}