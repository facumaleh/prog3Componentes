import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import{Button} from 'react-bootstrap'
// import Search from './Components/Search/Search';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        colorOriginal: "white",
        color: "white"
    };

    // cambiarColor=(nuevoColor)=>{
    //   if (this.state.color === this.state.colorOriginal){
    //     this.setState({color: nuevoColor})
    //   } else {
    //     this.setState({color: this.state.colorOriginal})
    //   }
    // };


};
  render(){
  return (
    <div id="wrapper" 
    style={{backgroundColor: this.state.color}}>

      <Header /> 
      <Button style={{ width:"90%"}} variant="warning" className="buttonChange"
      //  onClick={this.cambiarColor.bind(this,"black")}
      ><i class="icon-moon"> Cambiar Tema</i>
       
      </Button>
      {/* <Search/>  */}
      <Container/>
      <Footer/>

	</div>
	
    
  );


  };
 
  }
 


  


export default App;
