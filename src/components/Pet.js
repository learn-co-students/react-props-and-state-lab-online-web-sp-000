import React from 'react'

class Pet extends React.Component {



setButton = () => {
  if(this.props.pet.isAdopted){
   return <button className="ui disabled button">Already adopted</button>
  }else{
   return  <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)} value={this.props.pet.id}>Adopt pet</button>
  }
}

genderSymbol = () => {
  if(this.props.pet.gender == 'female'){
    return '♀'
  }else{
    return '♂'
  }
}



  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
          {this.genderSymbol() + " "}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age:  {this.props.pet.age}</p>
            <p>Weight:  {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.setButton()}
          
        </div>
      </div>
    )
  }
}

export default Pet
