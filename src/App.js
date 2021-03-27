// import React, { useEffect, useState } from "react";
import Header from './Components/Header/Header';
import './App.css';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import Search from './Components/Search/Search';



function App() {
 
  return (
    <div className="App">
       <Header /> 
       <Search/>
       <Container/>
       <Footer/>
    </div>
  );
}

export default App;
