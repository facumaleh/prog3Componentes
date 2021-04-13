import React, {Component} from 'react';
import{Button,Modal,OverlayTrigger, Image,Tooltip} from 'react-bootstrap';



class CharacterCard extends React.Component {

  constructor(props) {
      super(props);
    
      this.state= {
        isOpen: false,
        colorOriginal: this.props.color,
        color: this.props.color,
        likes:0

            }
    this.like1 = this.like1.bind(this);
    this.nolike = this.nolike.bind(this);

      }
      MouseEnter = (colorEntrar) => {
        if(this.state.color == this.state.colorOriginal) {
            this.setState({color: colorEntrar})
        }
      }

      MouseLeave = (colorViejo) => {
        if(this.state.color == "#E0E0E0") {
            this.setState({color: colorViejo})
        }
        // console.log("Salgo de la tarjeta a " + colorViejo);
    }
    
    like1() {
      // Increment the likes property stored in state
      this.setState(prevState => ({
        likes: prevState.likes + 1
      }));
    }
    nolike() {
      // Increment the likes property stored in state
      this.setState(prevState => ({
        likes: prevState.likes -1
      }));
    }
    

      openModal =  ()=> this.setState({isOpen: true});
      closeModal =  ()=> this.setState({isOpen: false});
      render(){
        const { img, firstName, lastName,Email,City,State,Street,StreetNumber,Telephone,imgMed, Country, Bithday,Registered, Date} = this.props;
        return(
        < div className="card" style={{backgroundColor: this.state.color}}
        onMouseEnter={this.MouseEnter.bind(this,"#E0E0E0")}
        onMouseLeave={this.MouseLeave.bind(this,this.state.colorOriginal)}
        >
      <img className="photo" src={img} alt={firstName} />
      <h2>{firstName}  {lastName} </h2>
      <p>
        <b>Email:</b> {Email}
        <br/>
        
        <br/>
        <b>Birthday:</b> {Date} <br></br>(Current age: {Bithday})
        <br/>
        <br/>
      
      <div>
        <Button variant="success"type="button" style={{width:"17%", margin:"7%"}} onClick={this.like1}>Like</Button> 
       <Button variant="danger"type="button" onClick={this.nolike}>Don't like</Button>
       <p style={{ margin:"7%"}}>{this.state.likes} liked this user</p> 
       </div>
       <br></br>
        <Button variant="primary"style={{ width:"80%", marginLeft:'10%'}}  onClick= {this.openModal}>
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
