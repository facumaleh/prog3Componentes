import React, {Component} from 'react';
import{Button,Modal,OverlayTrigger, Image,Tooltip} from 'react-bootstrap';



class CharacterCard extends React.Component {

  constructor(props) {
      super(props);
    
      this.state= {
        isOpen: false,
          
            }
      }
      openModal =  ()=> this.setState({isOpen: true});
      closeModal =  ()=> this.setState({isOpen: false});
      render(){
        const { img, firstName, lastName,Email,City,State,Street,StreetNumber,Telephone,imgMed, Country, Bithday,Registered, Date} = this.props;
        return(
         < div className="card" >
      <img className="photo" src={img} alt={firstName} />
      <h2>{firstName}  {lastName} </h2>
      <p>
        <b>Email:</b> {Email}
        <br/>
        
        <br/>
        <b>Birthday:</b> {Date} (Current age: {Bithday})
        <br/>



        <Button variant="primary"  onClick= {this.openModal}>
        			Mas info
      					</Button>
						  <Modal show= {this.state.isOpen}>
        				<Modal.Header closeButton>
   
         			 	<Modal.Title>{firstName}  {lastName}</Modal.Title>
        				</Modal.Header>
             
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
                  <Button style={{ marginLeft:"40%"}} variant="danger" onClick= {this.closeModal} > Back</Button>                
							</Modal.Body>
      					</Modal>

      </p>
    </div>
        )


      }

}
export default CharacterCard
