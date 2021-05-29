import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  getPets() {
    return this.props.pets.map(e => <Pet key={e.id} pet={e} onAdoptPet={this.props.onAdoptPet}/>)
  }
  render() {
    return <div className="ui cards">{this.getPets()}</div>
  }
}

export default PetBrowser
