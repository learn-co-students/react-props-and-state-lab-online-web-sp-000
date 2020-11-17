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

	onChangeType = (newType) => {
		this.setState({
			filters: {
				...this.state.filters,
				type: newType
			}
		})
	}

	onFindPetsClick = () => {
		const path = this.state.filters.type === 'all' ? `/api/pets` : `/api/pets?type=${this.state.filters.type}`

		fetch(path)
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				pets: data
			}, () => console.log(this.state.pets))
		})
		.catch(error => {
			console.error('Error:', error)
		})
	}

	onAdoptPet = (petId) => {
		const index = this.state.pets.findIndex(pet => pet.id === petId)
		this.setState({
			pets: [
				...this.state.pets.slice(0, index),
				Object.assign({}, this.state.pets[index], {
					isAdopted: true
				}),
				...this.state.pets.slice(index+1)
			]
		}, () => console.log(this.state.pets))
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
