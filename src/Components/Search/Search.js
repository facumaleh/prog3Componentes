
import React from 'react';
import{Button,Modal} from 'react-bootstrap';



class Search extends React.Component {

  constructor(props) {
      super(props);
    
      this.state= {
        

            }
    

      }
      
      render(){
        return(
            <div style={{width:"100%",textAlign:'center'}} >
            <input label='buscador' style={{width:"100%", textAlign:'center'}} onChange={this.onchange} placeholder='buscar persona'></input>
            </div>
        )


      }

}
export default Search

