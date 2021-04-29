import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const petUrl = `/api/pets`

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

  changeType = (event) =>{
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  findPets = () =>{
    if(this.state.filters.type !== 'all'){
      fetch(petUrl+`?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(animalType => this.setState({pets: animalType}))
    } else {
      fetch(petUrl)
      .then(response => response.json())
      .then(animalType => this.setState({pets: animalType}))
    }
  }

  adoptPet = (id) =>{
    let adoptedPet = this.state.pets.map(pet =>{
      return pet.id === id ? {...pet, isAdopted: true} :pet
    })
    this.setState({pets: adoptedPet})
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} isAdopted={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

// 1.  The app's initial state is already defined. App has two children: the
//     `<Filters />` and `<PetBrowser />` components.

// 2. App should pass a **callback** prop, `onChangeType`, to `<Filters />`. This
//    callback needs to update `<App />`'s `state.filters.type`

// 3. `<Filters />` needs a **callback** prop, `onFindPetsClick`. When the
//    `<Filters />` component calls `onFindPetsClick`, `<App />` should fetch a
//    list of pets using `fetch()`.

//   - Assuming your app is up and running, you can make a fetch to this exact URL:
//     `/api/pets` with an **optional query parameter** to get your data.
//   - Use `App`'s state.filters to control/update this parameter
//   - If the `type` is `'all'`, send a request to `/api/pets`
//   - If the `type` is `'cat'`, send a request to `/api/pets?type=cat`. Do the
//     same thing for `dog` and `micropig`.
//   - The pet data received will include information on individual pets and their
//     adoption status.

// 4. Set `<App/>`'s `state.pets` with the results of your fetch request so
//     you can pass the pet data down as props to `<PetBrowser />`

//   - **Even though we're using `fetch` here, its responses have been mocked in
//     order to make the tests work properly. That means it's important to use the
//     _exact_ URLs as described above, or your tests will fail!**

// 5. Finally, App should pass a **callback** prop, `onAdoptPet`, to `<PetBrowser
//    />`. This callback should take in an id for a pet, find the matching pet in
//    `state.pets` and set the `isAdopted` property to `true`.
