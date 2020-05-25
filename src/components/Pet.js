import React from 'react'

class Pet extends React.Component {
  constructor(props){
    super(props)
    let buttonToShow
    if (this.props.pet.isAdopted === true){
      buttonToShow = <button className="ui disabled button">Already adopted</button>
    }
    else{
      buttonToShow = <button className="ui primary button" onClick={this.handleClick} >Adopt pet</button>
    }
    this.state = {
      button: buttonToShow
    }
  }
  genderSymbol = () => {
    if (this.props.pet.gender === "male"){
      return '♂'
    }
    else {
      return '♀'
    }
  }

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
    this.setState({
      button: <button className="ui disabled button">Already adopted</button>
    })
  }
  
  render() {
    return (
      <div className="card" id={this.props.pet.id}>
        <div className="content">
          <a className="header">
            {this.genderSymbol()}
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
