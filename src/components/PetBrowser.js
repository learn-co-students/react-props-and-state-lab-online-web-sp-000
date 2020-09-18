import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let mapped = this.props.pets.map(elem => <Pet pet={elem} onAdoptPet={this.props.onAdoptPet}/>);
    return <div className="ui cards">
      {mapped}
    </div>
  }
}

export default PetBrowser
