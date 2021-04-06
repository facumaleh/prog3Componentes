import React, { useEffect, useState } from "react";
import Header from './Components/Header/Header';
import './App.css';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import Search from './Components/Search/Search';

import{Button} from 'react-bootstrap';


function App() {
  return (
    <div id="wrapper">

<Header /> 
      <Button style={{ marginLeft:"45%"}} variant="danger" >Change Theme</Button>
       <Search/> 
       <Container/>
       <Footer/>

	</div>
	
    
  );


  };
 
 


  


export default App;
