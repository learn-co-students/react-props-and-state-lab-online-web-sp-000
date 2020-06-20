import React from 'react'

class Pet extends React.Component {

  renderAdoptionButton = () => {
    return this.props.pet.isAdopted ? (
      <button className="ui disabled button">Already adopted</button>
    ) : (
      <button className="ui primary button" onClick={event => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    );
  }
  
  render() {
    let pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { pet.gender === "female" ? '♀' : '♂' }
            { pet.name }
          </a>
          <div className="meta">
            <span className="date">{ pet.type }</span>
          </div>
          <div className="description">
            <p>{ pet.age }</p>
            <p>{ pet.weight }</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderAdoptionButton()}
        </div>
      </div>
    )
  }
}

export default Pet
