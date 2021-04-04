import React, { useEffect, useState } from "react";
import Header from './Components/Header/Header';
import './App.css';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import Search from './Components/Search/Search';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import{Button} from 'react-bootstrap';

//styked-components.
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {

//set de theme 
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
 
  return (
   
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
      <Header /> 
      <Button style={{ marginLeft:"45%"}} variant="danger" onClick={() => themeToggler()}>Change Theme</Button>
       <Search/> 
       <Container/>
       <Footer/>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
