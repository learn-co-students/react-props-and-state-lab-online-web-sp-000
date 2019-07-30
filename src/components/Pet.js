import React from 'react'

class Pet extends React.Component {

  adoptedButtons = (pet) => {
    if (pet.isAdopted) {
      return (
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
        </div>
      )
    } else {
      return (
        <div className="extra content">
          <button className="ui primary button" onClick={() => this.props.onAdoptPet(pet.id)}>Adopt pet</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.pet.gender==='male') ? '♂' : '♀'}
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
          {this.adoptedButtons(this.props.pet)}
        </div>
      </div>
    )
  }
}

export default Pet
