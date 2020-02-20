import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
<<<<<<< HEAD
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));

    return <div className="ui cards">{petCards}</div>
=======
    return <div className="ui cards">
      <Pet />
    </div>
>>>>>>> 506aa7cd154436b201efe1792ad6e971208b8b02
  }
}

export default PetBrowser
