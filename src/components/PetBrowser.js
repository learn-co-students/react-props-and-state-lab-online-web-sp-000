import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render () {

    let pets = []
    this.props.pets.forEach(p => {
      pets.push(<Pet pet={p} onAdoptPet={this.props.onAdoptPet} />)
    })

    return <div className="ui cards">{pets}</div>
  }
}

export default PetBrowser
