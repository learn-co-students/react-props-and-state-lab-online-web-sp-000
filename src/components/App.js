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
    console.log(this.state)
    this.setState({
      filters: {type: event.target.value}
    })
  }

  onFindPetsClick = () => {
    let url = "/api/pets"
    fetch(url)
    .then(res => res.json())
    .then(pets => {
      pets.forEach(pet => {
        //this.setState({
          if (pet.type === "dog") {
            return pet
          } else if (pet.type === "cat") {

          } else if (pet.type === "micropig") {

          } else {
            return pet
          }
       // })  
      }) 
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
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
