import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  genPetCards = () => {
    this.props.pets.map(pet =>
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet(pet.id)}/>
    )
  }

  render() {
    return <div className="ui cards">{this.genPetCards()}</div>
  }
  // render() {
  //   const petCards = this.props.pets.map(pet => (
  //     <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
  //   ));
  //   return <div className="ui cards">{petCards}</div>;
  // }
}


// render() {
//   const petCards = this.props.pets.map(pet => (
//     <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
//   ));
//   return <div className="ui cards">{petCards}</div>;
// }


//Prop that has been assigned to PetBrowser component:
//pets={this.props.pets}
export default PetBrowser
//Props that must be endowed to Pet component:
//onAdoptPet={this.props.onAdoptPet(id)}
//pet={}
