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
       tamanioOriginal: '30%',
       tamanio: "30%",
       nuevoTamanio: "17%",
   
    }; 
  }



//solicitud api
componentDidMount(){
  fetch('https://randomuser.me/api/?results=6')
  .then(response => response.json())
  .then ((data)=>{
    //setea el estado de person
    this.setState({ person: data.results,personoriginal: data.results, loading: false });
  })
  .catch((e)=>console.log(e));}




// ver mas
  loadmore(){
    // busco el classname de mas para meter en la url
    var porClassName=document.getElementsByClassName("mas")[0].value;
    console.log(porClassName)
    if (!porClassName) {
      return alert ("Ingrese un numero valido")
    }
    fetch('https://randomuser.me/api/?results='+ porClassName)
    .then(response => response.json())
    .then ((data)=>{
     this.state.person= [...this.state.person, ...data.results]
     console.log(this.state.person)
     this.setState({person: this.state.person})
   })
    .catch((e)=>console.log(e));}



  //borrar item
  borrarItem(characteridx){
    console.log( characteridx);
    let resultados =this.state.person.filter((person)=> {
      //  guardo en var resultados el filtro de person
      return( characteridx!== person.login.uuid )
      //comparo idx con el uuid
    })
    // seteo el estado 
    this.setState({person: resultados})
    
  }

  //buscador
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
           // comparo name o last name o age con el valor ingresado .
          )
      })
      this.setState({
        //sete el estado de person con lo filtrado
          person: filtrado,
          textoBuscar: text,
      })
   } else this.setState({
     // si no busco nada queda igual
    person:this.state.personoriginal
  })  }


  //cambiar tamañp
  cambiarTamanio=()=>{
    //comparo tamano orignal del estado con el que esta ahora
    if(this.state.tamanio === this.state.tamanioOriginal){
      console.log(this.state.tamanio);
      // si es igual lo cambio
      this.setState({tamanio: this.state.nuevoTamanio})
      
    } else{
   // si es distinto lo no cambio
      this.setState({tamanio: this.state.tamanioOriginal})
      console.log(this.state.tamanio);
    }
    
  }
  // ordenar a....z
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
// // La letra "a" es anterior a la "c" produciendo un valor negativo
// 'a'.localeCompare('c'); // -2 o -1 (u otro valor negativo)

// // Alfabeticamente la palabra "check" viene después de "against" produciendo un valor ppositivo
// 'check'.localeCompare('against'); // 2 o 1 (u otro valor positivo)

// // "a" y "a" son equivalentes produciendo un valor neutro de 0
// 'a'.localeCompare('a'); // 0
  az = () => {
    this.state.person.sort((a, b) => a.name.first.localeCompare(b.name.first))
    this.setState({
        person: this.state.person.sort(function(a, b) { return a.name.first > b.name.first})
    })
}

//ordenar z...a


// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
// // La letra "a" es anterior a la "c" produciendo un valor negativo
// 'a'.localeCompare('c'); // -2 o -1 (u otro valor negativo)

// // Alfabeticamente la palabra "check" viene después de "against" produciendo un valor ppositivo
// 'check'.localeCompare('against'); // 2 o 1 (u otro valor positivo)

// // "a" y "a" son equivalentes produciendo un valor neutro de 0
// 'a'.localeCompare('a'); // 0


za = () => {
  this.state.person.sort((a, b) => b.name.first.localeCompare(a.name.first))
  this.setState({
      person: this.state.person.sort(function(a, b) { return a.name.first < b.name.first})
  })
}
  render() {
    

    return (
      <div className="contenedor">
        <Button type="button" style={{ width:"100%"}} onClick={this.cambiarTamanio.bind(this)} variant="info">    <i class="icon-resize-horizontal"></i>  <br></br>    Cambiar Tamanio</Button>
        {/* <Button type="button" style={{ width:"35%", margin: "5%"}} onClick={this.muestraFav.bind(this)} variant="danger">    <i class="icon-resize-horizontal"></i>  <br></br>    Cambiar Tamanio</Button> */}


        <br></br>
        <br></br>
        <br></br>
        <Button style={{width:"40%", marginLeft:"7%"}}onClick={this.az.bind(this)}  variant="info"  >A - Z</Button>
        <Button style={{width:"40%", marginLeft:"7%"}}onClick={this.za.bind(this)}  variant="info"  >Z - A</Button>

        <br></br>
        <br></br>
        <br></br>
    <input className="form-control"   placeholder="Buscador de personajes " value={this.state.text} onChange={(text) => this.filter(text)}/>
         {/* mapeo todos los items que me trae la api (bucle) mediante componetizacion con el com Character */}
          {this.state.person.map((character,idx) => {
              return (
                <Character 
                //le paso al componente hijo el valor del estado
                  tamanio= {this.state.tamanio}
                  // le paso al comp hijo una fuction
                  onDelete= {this.borrarItem.bind(this)}
                // bind vuelve dinamico un dato, el bind crea una function
                
                // idx del .map
                  key={idx}

                  //  props de cada persona
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
          {/* boton para poner mas cards */}
          <input className = "mas"style={{width:"40%", margin:"7%"}} placeHolder="Ingrese cuantas tarjetas quiere sumar" type="text"/> 
          <Button type="button" className='buttonLoad2'style={{width:"20%", margin:"7%"}} onClick={this.loadmore.bind(this)} > Cargar mas </Button>
          
        </div>

      </div>
    
      
      
      
      
      )
  
  }
}










