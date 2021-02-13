import React from 'react'

class Pet extends React.Component {

handleAdoptPet = event => {
  this.props.onAdoptPet(this.props.pet.id)
}  
  render() {
    const isAdopted = this.props.pet.isAdopted === true
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
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
          {isAdopted && <button className="ui disabled button">Already adopted</button>}
          {!isAdopted && <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
