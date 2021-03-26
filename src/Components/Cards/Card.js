import { useState, useEffect } from "react";
import React from "react";
import{Button,Modal} from 'react-bootstrap';


export default function CharacterCard(props) {
  const { img, firstName, lastName,Email,City,State,Street,StreetNumber,Telephone,imgMed} = props;
  	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
  return (
    <div className="card">
      <img className="photo" src={img} alt={firstName} />
      <h2>{firstName}  {lastName} </h2>
      <p>
        <b>Email:</b> {Email}
        <br/>
        <b>Location:</b> {City} , {State}, {Street},  {StreetNumber}
        <br/>
        <b>Telephone:</b> {Telephone}
        <br/>

        <Button variant="primary" onClick={handleShow}>
        			Mas info
      					</Button>
						  <Modal show={show} onHide={handleClose} animation={false}>
        				<Modal.Header closeButton>
         			 	<Modal.Title>{firstName}  {lastName}</Modal.Title>
        				</Modal.Header>
       			 		<Modal.Body> 
									<img style={{ marginLeft:"34%"}}src={img}/>
                  <br/>
                  <br/>

                  <b>Email:</b> {Email}
                  <br/>
                  <b>Location:</b> {City} , {State}, {Street},  {StreetNumber}
                  <br/>
                  <b>Telephone:</b> {Telephone}
							</Modal.Body>
      					</Modal>

      </p>
    </div>
  );
}
