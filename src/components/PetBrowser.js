import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

   createPetCards = () => {
      return (
         this.props.pets.map(pet => 
         <Pet  key={pet.id.toString()}
               gender={pet.gender}
               name={pet.name} 
               type={pet.type}
               age={pet.age}
               weight={pet.weight} 
               isAdopted={this.props.onAdoptPet(pet.id)} />
         )
      )
   }

   render() {
      const petCards =  this.createPetCards()
      return(
         <div className="ui cards">
            {petCards}
         </div>
      )
   }
}

export default PetBrowser
