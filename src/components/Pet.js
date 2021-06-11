import React from 'react'

class Pet extends React.Component {
adoptedButtons = ()=>{
  if(this.props.pet.isAdopted === true){
    return <button  className="ui disabled button">Already adopted</button>
  }else {
    return <button onClick={this.handleClick} className="ui primary button">Adopt pet</button>
  }
}



  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }
   render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "male" ?'♂':'♀' }
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
          {this.adoptedButtons()}
        </div>
      </div>
    )
  }
}

export default Pet
