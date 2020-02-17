import React from 'react'

class Pet extends React.Component {

  buttonElement = () => {
    if(this.props.pet.isAdopted === true){
      return(
        <button className="ui disabled button">Already adopted</button>
      )
    }else{
      return(
        <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
      )
    }
  }
  render() {
    let pet = this.props.pet;
    let gender;
    if(pet.gender === 'male'){
      gender = '♂'
    }else if(pet.gender === 'female'){
      gender = '♀'
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {
              gender
            }
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
            {this.buttonElement()}
        </div>
      </div>
    )
  }
}

export default Pet
