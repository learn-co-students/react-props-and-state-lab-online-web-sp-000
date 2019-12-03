import React from 'react'

class Pet extends React.Component {

  gender = () =>{
   return this.props.pet.gender === "female" ? '♀' : '♂'
  }


  adopt = () =>{
    this.props.onAdoptPet(this.props.pet.id)
  }
  adopetedStatus = () =>{
    if(this.props.pet.isAdopted === true){
      return <button className="ui disabled button">Already adopted</button>
    }else{
      return <button onClick={this.adopt} className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender()} 
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
          {this.adopetedStatus()}      
        </div>
      </div>
    )
  }
}

export default Pet
