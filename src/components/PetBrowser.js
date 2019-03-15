import React from 'react'

import Pet from './Pet'

const PetBrowser = props => <div className="ui cards">{props.pets.map((pet) => <Pet pet={pet} key={pet.id} onAdoptPet={props.onAdoptPet} />)}</div>
 
export default PetBrowser


