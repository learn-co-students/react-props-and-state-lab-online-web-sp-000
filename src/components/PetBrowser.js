import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  render() {
    let petsArray = this.props.pets.map(p => 
    <Pet pet={p} 
    key={p.id} 
    isAdopted={this.props.pets.includes(p.id) ? true : false} 
    onAdoptPet={this.props.onAdoptPet}/>)
    return (
      <div className="ui cards">
        <p>{petsArray}</p>
      </div>
    );
  }
}

export default PetBrowser;
