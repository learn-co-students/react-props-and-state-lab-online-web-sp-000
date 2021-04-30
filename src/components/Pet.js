import React from 'react'

class Pet extends React.Component {
  render() {
    let button;
    if (this.props.pet.isAdopted === true) {
      button = <button className="ui disabled button">Already adopted</button>
    } else {
      button = <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂' }
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
