import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import{Button} from 'react-bootstrap'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        colorOriginal: "white",
        color: "white",
       
    };
  };



    cambiarColor = (nuevoColor)=>{
      if (this.state.color === this.state.colorOriginal){
        this.setState({color: nuevoColor})
      } else {
        this.setState({color: this.state.colorOriginal})
      }
    };

   

  render(){



  return (
    <div id="wrapper" 
      style={{backgroundColor: this.state.color}}>

      <Header /> 
      
      <div className="cambiarFondo" style={{width: '90%', textAlign:'center', margin:'auto', backgroundColor:"#DEB887", borderRadius:'20px', hover:"#DEB888"}}
      onClick={this.cambiarColor.bind(this, '#e0dfdc')}
      >Cambiar color fondo
      </div>
      <Container/>
      <Footer/>

	  </div>
	
    
  );


  };
 
  }
 


  


export default App;
