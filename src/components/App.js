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
    this.setState({
      filters: {
//        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
  //  console.log("clicked")
    let url = '/api/pets'
    if (this.state.filters.type !== "all"){
      // concating to the end of url after /pets
      url += `?type=${this.state.filters.type}`
      // now if it is "all" it goest by default to root url
    }

    fetch(url)
         .then(result => result.json())
         // .then(console.log)
         // (22) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

         .then(animals => {
            this.setState({
              pets: animals    // updejta pets state prema fetchanim podacima
            })
    })
  }


    onAdoptPet = (id) => {
    //  console.log("clicked") - radi jer smo poslali iz APP u PetBrowser pa u Pet
    //  console.log(thePet) -  after code below
    //  {id: "5c142d9e-ea45-4231-8146-cccf71c704c0", type: "dog", gender: "male", age: 4, weight: 1, …}

    // 1. make a copy or orig array, 2. change pet property, 3. replace array

      let petsArrayCopy = [...this.state.pets]
      const thePet = this.state.pets.find(pet => pet.id === id)
      thePet.isAdopted = true
      this.setState({ pets: petsArrayCopy })
        // react dev tools -> isAdopted: true




    //  const currentState = pet.isAdopted;
    //  console.log(currentState)
    //  false
    //  this.setState({ isAdopted: !currentState }) //, () => console.log(this.state.isAdopted))
    };



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
            onFindPetsClick={this.onFindPetsClick}
            />
            </div>

            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App
