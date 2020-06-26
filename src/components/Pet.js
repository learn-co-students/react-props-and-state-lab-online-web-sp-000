import React from 'react'

class Pet extends React.Component {
  returnGenderIcon = (gender) => {
    return gender === 'male' ? '♂' : '♀'
  }

  showAdoptButtons = (pet) => {
    if (pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={() => this.props.onAdoptPet(pet.id)}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.returnGenderIcon(this.props.pet.gender)}
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
          {this.showAdoptButtons(this.props.pet)}
        </div>
      </div>
    )
  }
}

export default Pet
