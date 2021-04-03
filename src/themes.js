import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "white",
  fontColor: "black",
  header: "white",
  footer: "white",
  card:"white"
};

export const darkTheme = {
  body: "black",
  fontColor: "#white",
  header: "black", 
  footer: "black",
  card:"black"



};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

`;
