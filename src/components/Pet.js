import React from 'react'

class Pet extends React.Component {
  gender(props) {
    if(props === 'male'){
      return ('♂')
    }
    if(props === 'female'){
      return  ('♀')
    }
  }

  // adoptedStatus(props) {
  //   if(props === 'true') {
  //     return (<button className="ui disabled button">Already adopted</button>)
  //   }
  //   else if(props === 'false') {
  //     return (<button className="ui primary button">Adopt pet</button>)
  //   }
  // }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender(this.props.pet.gender)}
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
          {this.props.pet.isAdopted ?
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
