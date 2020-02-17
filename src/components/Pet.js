import React from 'react'

class Pet extends React.Component {

  addButtons = pet =>{
    if(!pet.isAdopted){
      return(
      <div className="extra content">  
          <button className="ui disabled button" onClick = {pet.handleClick} >Already adopted</button>
          <button className="ui primary button" onClick = {pet.handleClick}> Adopt pet</button>
      </div>
      )
    }else{
      return (
      <div className="extra content">     
        <button className="ui primary button" >Already adopted</button>
        <button className="ui disabled button" >Adopt pet</button>
      </div>
      )}
  }

  handleClick = () =>{
    this.props.onAdoptPet()
  }


  render() {
    let pet = this.props.pet
    console.log(pet)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender==="male"? '♀' : '♂' }
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age} </p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        {this.addButtons(pet)}
      </div>
    )
  }
}

export default Pet
