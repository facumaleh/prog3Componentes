import React, {Component, useEffect, useState} from 'react';
import{Button,Modal,OverlayTrigger, Image,Tooltip} from 'react-bootstrap';


export default function CharacterCard(props) {
  const { img, firstName, lastName,Email,City,State,Street,StreetNumber,Telephone,imgMed, Country, Bithday,Registered, Date} = props;
  	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
  return (
    <div className="card" >
      <img className="photo" src={img} alt={firstName} />
      <h2>{firstName}  {lastName} </h2>
      <p>
        <b>Email:</b> {Email}
        <br/>
        
        <br/>
        <b>Birthday:</b> {Date} (Current age: {Bithday})
        <br/>



        <Button variant="primary" onClick={handleShow}>
        			Mas info
      					</Button>
						  <Modal show={show} onHide={handleClose} animation={false}>
        				<Modal.Header closeButton>
   
         			 	<Modal.Title>{firstName}  {lastName}</Modal.Title>
        				</Modal.Header>
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Facundo Maleh ,Tomas Caimmi y Agustin Ihdoype</Tooltip>} >
    {({ ref, ...triggerHandler }) => (
      <Button
        variant="light"
        {...triggerHandler}
        className="d-inline-flex align-items-center"
      >
        <Image
          ref={ref}
          roundedCircle
          src=""
        />
        <span className="ml-1">¿Quien hizo el trabajo?</span>
      </Button>
    )}
  </OverlayTrigger>
       			 		<Modal.Body> 
									<img style={{ marginLeft:"34%"}}src={img} alt='Not found'/>
                  <br/>
                  <br/>

                  <b>Email:</b> {Email}
                  <br/>
                  <b>Location:</b> {Street}, {StreetNumber}{City}, {State}, {Country}
                  <br/>
                  <b>Telephone:</b> {Telephone}
                  <br/>
                  <b>Registered:</b> {Registered}
                  <br/>
                  <br/>
                  <Button style={{ marginLeft:"40%"}} variant="danger" onClick={handleClose} > Back</Button>                
							</Modal.Body>
      					</Modal>

      </p>
    </div>
  );
}
