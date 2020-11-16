import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super()
    this.state = {
      id: props.pet.id
    }
  }
  buttons = (event) => {
    // document.getElementById(event.target.id).className = "ui disabled button"
    // document.getElementById(`adopted${event.target.id}`).className = "ui primary button"
    this.props.onAdoptPet(this.state.id)
  }

  getGenderSymbol = (gender) => {
    switch (gender){
      case "female":
        return '♀'
      case "male":
        return '♂'
    }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.getGenderSymbol(this.props.pet.gender)}<br></br>
            {this.props.pet.name}
          </a>
          <div className="meta">
    <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
          <p>Age: {this.props.pet.age}</p>
            <p>Weight:{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : null}
          {this.props.pet.isAdopted ? null : <button onClick={this.buttons} className="ui primary button">Adopt pet</button>}
          
        </div>
      </div>
    )
  }
}

export default Pet
