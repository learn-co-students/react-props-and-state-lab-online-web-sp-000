import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    debugger
    return(
      <div className="ui cards">
        {this.props.pets.map(item=><Pet onAdoptPet={this.props.onAdoptPet} pet={item}/>)}
      </div>
    )

  }
}

export default PetBrowser
