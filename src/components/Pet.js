import React from 'react'

class Pet extends React.Component {


  handleClick = () =>{
    this.props.onAdoptPet()
  }


  render() {
    let pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender==="male"? '♂' : '♀'  }
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
          {pet.isAdopted? (<button className="ui disabled button" >Already adopted</button>) :
          (<button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}> Adopt pet</button>) }
      </div>
    )
  }
}

export default Pet
