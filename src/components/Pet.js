import React from 'react'

class Pet extends React.Component {
  genderToSymbol = () => {
    if (this.props.pet.gender === 'male') {
      return '♂'
    } else if (this.props.pet.gender === 'female') {
      return '♀'
    }
  } 
  debugger
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
        {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>}
          
          
        </div>
      </div>
    )
  }
}

export default Pet
