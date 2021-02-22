import React, { useCallback } from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  renderPets = (pets) => {
    return pets.map( pet => <Pet pet={pet} />)
  }

  render() {
    return <div className="ui cards">{this.renderPets(this.props.pets)}</div>
  }
}

export default PetBrowser
