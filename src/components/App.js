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
    // console.log(event.target)
    this.setState({
      filters: {
        type: event.target.value
      }
    })


  }



  onFindPetsClick = () => {
    let url = ('/api/pets')
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
      .then(r => r.json())
      .then(petsJSONArray => {
        this.setState({
          pets: petsJSONArray

        }, () => console.log(this.state.pets))
      }, () => console.log(this.state.pets))

  }
  onAdoptPet = (id) => {
    const copyPetArray = [...this.state.pets]
    let thePet = copyPetArray.find(p => p.id === id)
    thePet.isAdopted = true
    this.setState({
      pets: copyPetArray
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
              <Filters onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
