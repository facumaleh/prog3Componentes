import React from "react";
import { useState, useEffect } from "react";
import CharacterCard from "../Cards/Card";
import Container from "../Container/Container";



export default function Navbar(props) {

  const [allUsers, setTodosUsuarios] = useState([]);
  const [users, setUsuarios] = useState([]);
  

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setTodosUsuarios(userData.results);
      setUsuarios(userData.results);
    })();
  }, []);

  const filtrarTarjetas = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsuarios(filteredUsers);
  }


 return(
  <div className="navbar">
  <span>Busque: </span>

      <input value={props.value} className="searchbar" onInput={filtrarTarjetas} placeholder="Buscar..."/>

      {users.map((user, index) => (
        <Container key={index} userData={user} />
        ))}
</div>

 );
}