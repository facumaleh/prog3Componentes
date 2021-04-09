import React, {Component, useEffect, useState} from 'react';
import Character from "../Cards/Card";



export default function Container(props) {
    
const [characters, setCharacters] = useState([]);
  const [searchValue] = useState("");



  useEffect(() => {
    getAPI().then((resp) => {
      setCharacters(resp.results);
    });
  }, []);





  const getAPI = async () => {
    const url = "https://randomuser.me/api/?results=21";
    return await fetch(url).then((result) => result.json());
  };

    

  const filteredChars = characters.filter((char) => {
    return char.name.first.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });

 
  return (
    <div className="contenedor">
        {filteredChars.map((character,idx) => {
        return (
          <Character key={idx}
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

          />
        );
      })} 
    </div>
  
    
    
    
    
    )


}

