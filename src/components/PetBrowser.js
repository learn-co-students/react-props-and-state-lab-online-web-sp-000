import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  petMapper = () => {
    return this.props.pets.map(e => <Pet pet={e}/>)
  }
  render() {
    return <div className="ui cards"><Pet onAdoptPet={this.props.onAdoptPet}/> {this.petMapper()}</div>
  }
}

export default PetBrowser
