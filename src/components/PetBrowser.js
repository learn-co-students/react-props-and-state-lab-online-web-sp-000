import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petItems = []

    for (let i = 0; i < this.props.pets.length; i++) {
      petItems.push(<div><Pet pet={this.props.pets[i]} onAdoptPet={this.props.onAdoptPet}/></div>)
    }

  return <div className="ui cards">{petItems}</div>
  }
}

export default PetBrowser
