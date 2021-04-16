import Character from "../Cards/Card";
import{Button} from 'react-bootstrap';
import '../../App.css';


import React from "react";

export default class Container extends React.Component {
  constructor(props){
    super(props);
 
    this.state = {
      loading: true,
      person: [],
      visible: 6,
    personoriginal:[],
      textoBuscar: " ",
      // tamanioOriginal: '30%',
      // tamanio: "30%",
      // nuevoTamanio: "15%"
    }; 
  }

componentDidMount(){
  fetch('https://randomuser.me/api/?results=6')
  .then(response => response.json())
  .then ((data)=>{
    this.setState({ person: data.results,personoriginal: data.results, loading: false });
  })
  .catch((e)=>console.log(e));}

// componentDidUpdate
  loadmore(){
    var porClassName=document.getElementsByClassName("mas")[0].value;
    console.log(porClassName)
    if (!porClassName) {
      return alert ("ingrese un numero valido")
    }
    fetch('https://randomuser.me/api/?results='+ porClassName)
    .then(response => response.json())
    .then ((data)=>{
     this.state.person= [...this.state.person, ...data.results]
     console.log(this.state.person)
     this.setState({person: this.state.person})
   })
    .catch((e)=>console.log(e));}

  
  borrarItem(characteridx){
    console.log( characteridx);
    let resultados =this.state.person.filter((person)=> {
      return( characteridx!== person.login.uuid )
    })
    this.setState({person: resultados})


  }


  filter(event){
    if (event.target.value.length !== 0) {
      
   
      var text = event.target.value
      const personajes = this.state.person
      const filtrado = personajes.filter((item) =>{

          const itemData = item.name.first.toUpperCase()
          const lastName = item.name.last.toUpperCase()
          const age = item.dob.age.toString()
          const textData = text.toUpperCase()
          console.log(age);
          return (
            itemData.includes(textData) || lastName.includes(textData) || age.includes(textData)
            
          )
      })
      this.setState({
          person: filtrado,
          textoBuscar: text,
      })
   } else this.setState({
    person:this.state.personoriginal
  })  }

  cambiarTamanio=()=>{
    if(this.state.tamanio === this.state.tamanioOriginal){
      console.log(this.state.tamanio);
      this.setState({tamanio: this.state.nuevoTamanio})
    } else{
      this.setState({tamanio: this.state.tamanioOriginal})
      console.log(this.state.tamanio);
    }
    
  }

  render() {
    if (this.state.loading) {
      return <div><h1 className="texto1">loading...</h1></div>;
    }

    if (!this.state.person) {
      return <div><h1 className="texto1">didn't get a person</h1></div>;
    }

    return (
      <div className="contenedor">
        <Button type="button" onClick={this.cambiarTamanio.bind(this)} variant="warning"> Cambiar Tamanio</Button>
<input className="form-control"  placeholder="Buscador de personajes " value={this.state.text} onChange={(text) => this.filter(text)}/>

          {this.state.person.map((character,idx) => {
              return (
                <Character 
                  // tamanio= {this.state.tamanio}
                  onDelete= {this.borrarItem.bind(this)}
                  key={idx}
                  id= {character.login.uuid}
                  firstName={character.name.first}
                  img={character.picture.large}
                  lastName={character.name.last}
                  Email={character.email}
                  city={character.location.city}
                  State={character.location.state}
                  Street={character.location.street.name}
                  StreetNumber={character.location.street.number}
                  Telephone= {character.phone}
                  imgMed={character.picture.medium}
                  Country={character.location.country}
                  Postcode={ character.location.postcode}
                  Bithday= {character.dob.age}
                  Date= {character.dob.date}
                  Registered = {character.registered.date}
                  color="white"
      
                />
          );
        })} 
            <div className= "Botonesx3">
          {/* //onchange */}
          <input className = "mas"  type="text"/> 
          <Button type="button" className='buttonLoad2'style={{width:"10%", margin:"7%"}} onClick={this.loadmore.bind(this)} > Cargar mas </Button>
          
        </div>

      </div>
    
      
      
      
      
      )
  
  }
}










