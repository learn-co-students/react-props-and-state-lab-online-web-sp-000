import React from 'react'

class Pet extends React.Component {

  constructor(props) {
    super()
    this.state = {id: props.pet.id}
  }

  adopt = () => {
    // console.log(this.props)
    this.props.onAdoptPet(this.state.id)
  }

  findGender = (gender) => {
    if (gender === "female") return '♀'
    else if (gender === 'male') return '♂'
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.findGender(this.props.pet.gender)}
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
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.adopt}>Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet
