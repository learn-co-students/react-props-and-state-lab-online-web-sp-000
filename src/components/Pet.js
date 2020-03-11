import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAdopted: this.props.pet.isAdopted
    }
  }

  handleClick = (event) => {
    this.props.onAdoptPet(this.props.pet.id)
    this.setState({
      isAdopted: true
    })
  }

  adoptButton = () => {
    if(this.state.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={(event) => this.handleClick(event)}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.pet.gender === 'male') ? '♂' : '♀'}
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
          {this.adoptButton()}
        </div>
      </div>
    )
  }
}

export default Pet
