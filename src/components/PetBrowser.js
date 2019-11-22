import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPets = () => {
    this.props.pets.forEach(pet => {
      return <Pet pet={pet} />
    })
  }

  render() {
    debugger
    return (
      <div className="ui cards">
        {this.renderPets()}
      </div>
    )
  }
}

export default PetBrowser
