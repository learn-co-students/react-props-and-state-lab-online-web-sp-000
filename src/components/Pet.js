import React from 'react'

class Pet extends React.Component {
  genderSymbol = () => {
    if (this.props.pet.gender === 'male') {return '♂'} else if (this.props.pet.gender === 'female') {return '♀'}
  }

  adoptClick = (e) => {
    this.props.onAdoptPet(this.props.pet.id)
  }
  
  buttonSelect = () => {
    return this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={this.adoptClick} className="ui primary button">Adopt pet</button>
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            Gender: {this.genderSymbol()}
            Name: {this.props.pet.name}
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
          {this.buttonSelect()}
        </div>
      </div>
    )
  }
}

export default Pet
