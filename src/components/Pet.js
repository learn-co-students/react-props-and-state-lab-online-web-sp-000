import React from 'react'

class Pet extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.pet.id,
      type: this.props.pet.type,
      gender: this.props.pet.gender,
      age: this.props.pet.age,
      weight: this.props.pet.weight,
      name: this.props.pet.name,
      isAdopted: this.props.pet.isAdopted
    }
  }

  genGender = (gender) => {
    if (gender === "male") {
      return "♂"
    } else {
      return "♀"
    }
  }

  adoptPet = (event) => {

    this.setState(previousSate => {
      return {
        ...previousSate,
        isAdopted: true
      }
    })

    //event.persist()
    //debugger
    this.props.onAdoptPet(this.state.id)
  }

  genAdoptButton = () => {

    if (this.state.isAdopted) {
      //document.getElementById(`${this.state.id}`).className = 'ui disabled button'
      return (
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          
        </div>
      )
    } else {
      return (
        <div className="extra content">
         
          <button className="ui primary button" id={this.state.id} onClick={this.adoptHandler} >Adopt pet</button>
        </div>
      )
    }
  }

  adoptHandler = () => {
    //debugger
    if (this.state.isAdopted) {
      
    } else {
      this.setState(previousSate => {
        return {
          ...previousSate,
          isAdopted: true
        }
      })
      this.props.onAdoptPet(this.state.id)
    }
    
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.genGender(this.state.gender)}
            {this.state.name}
          </a>
          <div className="meta">
            <span className="date">{this.state.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.state.age}</p>
            <p>Weight: {this.state.weight}</p>
          </div>
        </div>
        
          {this.genAdoptButton()}
          
        
      </div>
    )
  }
}

export default Pet
