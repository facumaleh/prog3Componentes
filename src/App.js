import React, {Component, useEffect, useState} from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import{Button} from 'react-bootstrap';
// import Search from './Components/Search/Search';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        // color: this.props.backgroundColor
    }

  //   cambiarColor= (nuevoColor)=>{
  //     console.log("cambiar color a " + nuevoColor);
  //     // if (this.state.color === this.state.colorOriginal){
  //     // this.setState({color: nuevoColor})
  //     // console.log(this.state.color);
  //     // }
  //     // else{
  //     // this.setState({color: this.state.colorOriginal})
  //     // console.log(this.state.color)
  //     // }
  // }

};
  render(){
  return (
    <div id="wrapper" >

      <Header /> 
      <Button variant="warning" className="buttonChange"
      //  onClick={this.cambiarColor.bind(this,"black")}
      >
        Cambiar fondo
      </Button>
      {/* <Search/>  */}
      <Container/>
      <Footer/>

	</div>
	
    
  );


  };
 
  }
 


  


export default App;
