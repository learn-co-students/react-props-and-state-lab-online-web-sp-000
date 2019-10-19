import React from 'react'

// here are some pet cards with type, age, weight, option to adopt or not
// needs to display right data

class Pet extends React.Component {
  isAdoptedButton = () => {
    if (!!this.props.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.pet.gender === "female") ? '♀' : '♂'}
            {" " + this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>{"Age: " + this.props.pet.age}</p>
            <p>{"Weight: " + this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.isAdoptedButton()}
        </div>
      </div>
    )
  }
}

export default Pet
