import React from 'react'

class Pet extends React.Component {
  handleAdoptClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  displayButtons = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.handleAdoptClick}>Adopt pet</button>

    }
  }

  render() {
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
          {this.displayButtons()}
        </div>
      </div>
    )
  }
}

// ​
// age: 3
// ​​
// gender: "male"
// ​​
// id: "2c902312-dfa3-446f-8b4b-5e115170d807"
// ​​
// isAdopted: false
// ​​
// name: "Teddy"
// ​​
// type: "cat"
// ​​
// weight: 1

export default Pet
