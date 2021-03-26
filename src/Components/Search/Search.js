import React from "react";

export default function Navbar(props) {


 return(
  <div className="navbar">
  <span>Busque: </span>
  <input
    value={props.value}
    className="searchbar"
  />
</div>

 );
}