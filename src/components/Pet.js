import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.pet = props.pet
    this.state = { adopted: props.pet.isAdopted }
  }

  getButton() {
    if (this.state.adopted) {
      return (<button className="ui disabled button">Already adopted</button>)
    } else {
      return (
        <button className="ui primary button" onClick={ () => {
          this.props.onAdoptPet(this.props.pet.id)
          this.setState( { adopted: true })
        }}>
          Adopt pet
        </button>
      )
    }
  }

  render() {
    return (
      <div className="card" id={this.props.pet.id}>
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂' : '♀'} {this.props.pet.name}
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
          {this.getButton()}
        </div>
      </div>
    )
  }
}

export default Pet
