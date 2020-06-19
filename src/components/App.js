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

  onFindPetsClick = () => {
    //console.log('onFindPetsClick')
    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
        .then(res => res.json())
        .then(petsArray => this.setState({pets: petsArray}))
    }else{
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(res => res.json())
        .then(petsArray => this.setState({pets: petsArray}))
    }
  }

  onAdoptPet = (petId) => {
    const updatedPetArray = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet
    })

    this.setState({ pets: updatedPetArray })
  }

  onChangeType = (event) => {
    const filer = event.target.value
    this.setState( {...this.state.filters, type: filter} )
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}  />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
