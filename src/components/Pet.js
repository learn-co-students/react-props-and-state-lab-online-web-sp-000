import React from 'react'

class Pet extends React.Component {
  
  adoptPet = (event) => {
    this.props.onAdoptPet(event)
  }

  render() {

    let id = this.props.pet.id
    let button
    if (this.props.pet.isAdopted) {
      button = <button className="ui disabled button">Already adopted</button>
    } else { 
      button = <button id={id} className="ui primary button" onClick={event => this.adoptPet(id)}>Adopt pet</button>
    }
    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { (this.props.pet.gender === 'male') ? '♂' : '♀' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
            {button}         
        </div>
      </div>
    )
  }
}

export default Pet
