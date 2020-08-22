import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
let FETCH_URL = '/api/pets'

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
  onChangeType = (type) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }
  onFindPetsClick = () => {
    fetch(FETCH_URL)
    .then(response => response.json())
    .then(obj => obj)
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
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
