import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
   const petsCard = this.props.pets.map((pet)=> {
    return <Pet onClick={this.props.onAdoptPet} pet={pet} adoptButton={this.props.adoptButton}/>
     })
     
     // line 7  we map over state which is coming from app component which is the array of all the pets 
     //each  of pets on the array one in the time We create a pet component so we basically create a div for 
     //each of this pet in the array 
     // line 8 return a div it has a pet name it has a pet type pet age pet weight its all this component just in one <div>
     // we export this <div from pet.js we import pet from './Pet' file so we import div into Pet browser 
  // debugger
  // console.log(petsCard)
    return <div className="ui cards">{petsCard}</div>
    // we just take the array which we created {petsCard} and we rendered
    //This is how it organize because of CSS its very important 
    //line 18 This code here loops over each of the pets and create a each div for  pets
    //MAP RETURN NEW ARRAY what ever we return inside of here its gets like its own array 
  }
}

export default PetBrowser
