import React from 'react'

class Pet extends React.Component {

  getGender = () => {
    if (this.props.pet.gender === 'female'){
      return '♀';
    } else {
      return '♂';
    }
  }

  adoptedButton = () => {
    if (this.props.pet.isAdopted){
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button onClick={event => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.getGender()}
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
          {this.adoptedButton()}
        </div>
      </div>
    )
  }
}

export default Pet
