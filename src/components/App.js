import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }



    onChangeType = (event) => {
      //use arroy function to bind "this" to the current class else "this" will be undefined
      this.setState({
      // setstate takes an object({}) as an argument. 
      filters: {
         type: event.target.value
      }
      // The object is "filters" and the props that are changing stete are "type" 
      }) 
    }
    //  onChangeType callback function updates the initial state based user selection in the Filter Compnent.It defaults to listing all the animals.  
    /// this callback function can accessed by the Filters component though the Select node 
    /// This callback is located in APP componenet instead of the FIlters Component because other child componets use it besides Filters 

   // Version two
    // onChangeType = ({ target: {value} }) => {
  //   this.setState({
  //     filter: {...this.state.filter, type: value}
  //   });
  // }; 
//  onChangeType callback function updatees the initial state, which lists all animals.  

onFindPetsClick = () => {
  let url = '/api/pets';

  if (this.state.filters.type !== 'all') {
    url += `?type=${this.state.filters.type}`;
  }
  // If filters is not "All", then adjust url to reflect the selected animal type

  fetch(url) 
    .then(res => res.json())
    .then(jsonPetsArray => this.setState({ pets: jsonPetsArray }));
    //set pets state as json response data
    
};


  onAdoptPet = (id) => {
   let petsArrayCopy = [...this.state.pets]
   let thePet = petsArrayCopy.find( p => p.id === id)
   thePet.isAdopted = true
   this.setState({
     pets: petsArrayCopy
   })
  }

 
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
              onChangeType={this.onChangeType}
              //callback function passes in the  onChangeType callback function as prop,i.e "Callback prop"
              //"this" because the the onChangeType method in this class.
              onFindPetsClick={this.onFindPetsClick}
              //callback function passes in fetchPets callback function as prop,i.e "Callback prop"
               />
              

            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets} 
              onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

