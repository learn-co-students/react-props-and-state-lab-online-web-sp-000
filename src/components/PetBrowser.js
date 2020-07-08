import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const c = this.props.pets.map((pet) => <Pet pet={pet} key={pet.id}/> )
    return <div className="ui cards"> {c} </div>
  }
}

export default PetBrowser
