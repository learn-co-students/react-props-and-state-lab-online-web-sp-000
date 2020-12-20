import React from 'react'

class Pet extends React.Component {

  get petGender() {
    if (this.props.pet.gender === 'male') {return '♂'}
    else if (this.props.pet.gender === 'female') {return '♀'}
    else {return null}
  };

  get isPetAdopted() {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <p className="header">
            {this.petGender}
            {this.props.pet.name}
          </p>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={event => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
