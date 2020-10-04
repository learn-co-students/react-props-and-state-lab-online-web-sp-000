// The app's initial state is already defined. App has two children: the <Filters /> and <PetBrowser /> components.
// App should pass a callback prop (pass a function as a property), onChangeType, to <Filters />. This callback needs to update <App />'s state.filters.type

// {} - means execute wathever is in that in JavaScript
//  this.onChangeType - this is pointing to an object of this particular component type so I have access to methods like onChangeType
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
    // to not get error setState of undifined we need to permanently bind this or write setState as arrow function
    //  when this was invoced it was in the filters and now we want to go back to the app and it will not point to the wright thing if we not bind it 
    //  with normal functions there is no way we are carring reference to app so we have to bind this function 
    this.onChangeType = this.onChangeType.bind(this)

  }

  // unlike other functions arrow function get this value based on teh surrounding context - this will be in the place where this is defined, instance of the class App
  //  onChange = (event) => {
  //    this.setState({
    //   filters: {
    //     type: event.target.value
    //   }
    // })
  // }

  // listener callback- all, cats,dogs,micropigs
  //  we pass this function down to the filters as a prop and give to filters componenet as listener for onChange and when function is invoced we no longer have context of app 
  // reason we need thid function in App not in Filters is becouse will afect more then one function
  onChangeType (event) {
    console.log(event.target.value)
    // setState as argument takes object
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  // <Filters /> needs a callback prop, onFindPetsClick. When the <Filters /> component calls onFindPetsClick, <App /> should fetch a list of pets using fetch()
    // Assuming your app is up and running, you can make a fetch to this exact URL: /api/pets with an optional query parameter to get your data.
    // Use App's state.filters to control/update this parameter
    // If the type is 'all', send a request to /api/pets
    // If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig
    // The pet data received will include information on individual pets and their adoption status
  // Set <App/>'s state.pets with the results of your fetch request so you can pass the pet data down as props to <PetBrowser /> - I use setState for thet
    // arrow function automaticly binds "this" 
  // onFindPetsClick = () => {
  //   console.log("clicked!")
  //   let url = '/api/pets';
  //   // if this.state.filters.type is not "all" ...
  //   if (this.state.filters.type !== 'all') {
  //   // then ajust url acordingly /api/pets?type=cat  optional query parameter- The query is the set of key-value pairs that go after the ? in a URL, separated by & characters.
  //     url += `?type={this.state.filters.type}`; //concat query parametar to url dinamicly  
  // }

  //   fetch(url)
  //   //  .then(console.log) // same as .then(resp => console.log(resp))
  //     .then(resp => resp.json())
  //     // .then(console.log) -should console.log list of fetched dogs or cats or whatever is clicked
  //     .then(petsJSONArray => {
  //       this.setState({
  //       pets: petsJSONArray
  //     }, () => console.log("after fetching, this.state is now", this.state))
  //     // set second argument as collback function console.log to see how state is changed  
  //   })
  // }

  onFindPetsClick = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }, () => console.log(this.state.pets)));
  };

  // Finally, App should pass a callback prop, onAdoptPet, to <PetBrowser />. This callback should take in an id for a pet, find the matching pet in state.pets and set the isAdopted property to true.
  onAdoptPet = (id) => {
    let petsArrayCopy = [...this.state.pets]
    // let petsArrayCopy = this.state.pets.slice() - slice without argument will make copy
    let thePet = petsArrayCopy.find(pet => pet.id == id) // pets.id is equal to id passed by callback from Pet component when Adopt pet button is clicked
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
              // name of the argument-property = value of property, I am passing down this properties to Filters component, then I add event listener to some HTML element to invoke callback funcion on thet prop
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}
              /> 
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet} 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
