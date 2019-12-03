import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
// import fetchMock from '../fetch-setup.js'

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

  onChangeType = event => {
    this.setState({
      filters:{
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    if(this.state.filters.type !== "all"){
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pets: json
        })
      })
    }else{
      fetch(`/api/pets`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pets: json
        })
      } ) 
    }
  }

  onAdoptPet = (id) =>{
    console.log(id)
   let p = this.state.pets.find(function(pet){
      return pet.id === id     
   })
    p.isAdopted = true;
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={id => this.onAdoptPet(id)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
