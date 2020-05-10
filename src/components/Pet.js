import React from 'react'

class Pet extends React.Component {
  render() {
    //destructute prop object 
    const {name, type, age, weight,gender, isAdopted, id} = this.props.pet
    const { onAdoptPet } = this.props
    ///consts because props should not be reassigned. 
      /// the four lines beelow can be  combined into the the one line above.
    // const name = this.props.pet.name
    // const type =this.props.pet.type
    // const age =this.props.pet.age
    // const weight = this.props.pet.weight 
    //const gender = this.props.pet.gener
    //const isAdopted =  this.props.pet.isAdopted 

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {name}
            {gender === "female" ? '♀' : '♂'}
            
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={()=>onAdoptPet(id)} className="ui primary button">Adopt pet</button>
          }
          
        </div>
      </div>
    )
  }
}

export default Pet

