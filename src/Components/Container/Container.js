import Character from "../Cards/Card";

import React from "react";

export default class Container extends React.Component {
  constructor(props){
    super(props);
 
    this.state = {
      loading: true,
      person: null,
      visible: 6,
    }; 
    this.loadmore = this.loadmore.bind(this);
  }
  
  

  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=21";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results, loading: false });
  }
  loadmore(){
    this.setState((old)=>{
      return{visible: old.visible + 6 }
    })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div className="contenedor">
          {this.state.person.slice(0,this.state.visible).map((character,idx) => {
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

          <button type="button" onClick={this.loadmore} >Ver mas tarjetas </button>
      </div>
    
      
      
      
      
      )
  
  }
}










