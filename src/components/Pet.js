import React from 'react'

class Pet extends React.Component {

  constructor(props) {
    super();
    this.state = {
      isAdopted: props.pet.isAdopted,
      button: this.showButton(props)
    }
  }

  genderIcon = () => {
    return this.props.pet.gender === "male" ? '♂' : '♀';
  }

  showButton = (props) => {
    return props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleAdoptOnClick}>Adopt pet</button>;
  }

  handleAdoptOnClick = () => {
    this.props.onAdoptPet(this.props.pet.id);
    this.setState({
      button: <button className="ui disabled button">Already adopted</button>
    })
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderIcon()}
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
          {this.state.button}
        </div>
      </div>
    )
  }
}

export default Pet
