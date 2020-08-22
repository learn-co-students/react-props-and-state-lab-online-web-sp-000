import React from 'react'

class Pet extends React.Component {
  genderToSymbol = () => {
    if (this.props.pet.gender === 'male') {
      return '♂'
    } else if (this.props.pet.gender === 'female') {
      return '♀'
    }
  } 
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderToSymbol()}
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
          <button className="ui disabled button" disabled={this.props.pet.isAdopted}>Already adopted</button>
          <button className="ui primary button" onClick={() => this.props.pet.onAdoptPet(this.props.pet.id)} disabled={this.props.pet.isAdopted}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
