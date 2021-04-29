import React from 'react';
import{Button,Modal} from 'react-bootstrap';



class CharacterCard extends React.Component {
// constuctor y el super nos deja trabajar con los estados 
//El método constructor es necesario para poder definir la estructura de un componente
  constructor(props) {
      super(props);
    // estado
      this.state= {
        isOpen: false,
        colorOriginal: this.props.color,
        color: this.props.color,
        likes: 0,
        
        
      }
            {console.log(this.state)}

    this.like1 = this.like1.bind(this);
    this.nolike = this.nolike.bind(this);

      }
      // cuando el mouse pasas por la Card
      MouseEnter = (colorEntrar) => {
        // compara el avlo de estado con el que pasamos como parametro
        if(this.state.color === this.state.colorOriginal) {
            this.setState({color: colorEntrar})
        }
        console.log(this.state);
      }
      // cuando el mouse sale de la Card
      MouseLeave = (colorViejo) => {
         // compara el avlo de estado con el que pasamos como parametro
        if(this.state.color === "#E0E0E0") {
            this.setState({color: colorViejo})
        }
        // console.log("Salgo de la tarjeta a " + colorViejo);
    }
 
    
    like1() {
      // Increment the likes property stored in state
      this.setState(qdelikes => ({
        likes: qdelikes.likes + 1
      }));
    }
    nolike() {
      // Increment the likes property stored in state
      this.setState(qdelikes => ({
        likes: qdelikes.likes -1
      }));
    }
    

      openModal =  ()=> this.setState({isOpen: true});
      closeModal =  ()=> this.setState({isOpen: false});

      render(){
        // usamos destructuring para poder llamar a las porps directo con un nombe mas facl
        const { img, firstName, lastName,Email,City,State,Street,StreetNumber,Telephone, Country, Bithday,Registered, Date,id} = this.props;
        return(
         //se guarda el q de likes  de la card 
        < div className="card" valor = {this.state.likes}
         //se guarda el tamanio de la card que cambia con el Onclick
        style={{backgroundColor: this.state.color, width: this.props.tamanio, borderRadius: "20px", borderColor: "#303030", padding:'0.5%'}}
        
        onMouseEnter={this.MouseEnter.bind(this,"#E0E0E0")}
        onMouseLeave={this.MouseLeave.bind(this,this.state.colorOriginal)}
        >
      <img className="photo" src={img} alt={firstName} />
      <h2>{firstName}  {lastName} </h2>
      <p>
        <b className="texto1">Email:</b> {Email}
        <br/>
        
        <br/>
        <b className="texto1">Birthday:</b> {Date.substring(0,10)} <br></br>(Current age: {Bithday})
        <br/>
        <br/>
      
      <div>
        {/*  btn de likes */}
        <Button variant="success"type="button"style={{width:"17%", margin:"7%"}}  onClick={this.like1}><i class="icon-thumbs-up"></i></Button>

       <Button variant="danger"type="button"style={{width:"17%", margin:"7%"}}  onClick={this.nolike}><i class="icon-thumbs-down"></i></Button>
       <p style={{ margin:"7%"}}>{this.state.likes} liked this user</p> 
       </div>
       <br></br>
       <Button variant="danger"style={{ width:"80%", marginLeft:'10%'}}  onClick= {this.props.onDelete.bind(this,id)}><i class="icon-trash">Borrar</i> 
        	
      					</Button>
                <br></br>
                <br></br>

        <Button variant="primary"style={{ width:"80%", marginLeft:'10%'}}  onClick= {this.openModal}>
          <i class="icon-info-sign">  	Mas info</i>
        		 
      	</Button>
      {/* Usamos REact boostrap y le seteamos en eleestado el isOpen, si esta cerrado
        nose muestra, si se hace click lo abre y lo muestra */}
				<Modal show= {this.state.isOpen}>
        				<Modal.Header closeButton  onClick= {this.closeModal}>
   
         			 	<Modal.Title>{firstName}  {lastName}</Modal.Title>
        				</Modal.Header>
             
       			 		<Modal.Body> 
									<img style={{ marginLeft:"34%"}}src={img} alt='Not found'/>
                  <br/>
                  <br/>

                  <b className="texto1">Email:</b> {Email}
                  <br/>
                  <b className="texto1">Location:</b> {Street}, {StreetNumber}{City}, {State}, {Country}
                  <br/>
                  <b className="texto1">Telephone:</b> {Telephone}
                  <br/>
                  <b className="texto1">Registered:</b> {Registered}
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
