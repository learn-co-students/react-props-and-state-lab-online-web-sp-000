import React from 'react'

class Pet extends React.Component {
  render() {
    // destructure the incoming pet props - looks much cleaner when writing the code below
    const { 
      name, 
      type, 
      age, 
      weight, 
      gender, 
      isAdopted,
      id
    } = this.props.pet
    const { onAdoptPet} = this.props
    // these four lines of code below are equivalent
    // to the one line of code written above
    // const name = this.props.pet.name
    // const type = this.props.pet.type
    // const age = this.props.pet.age
    // const weight = this.props.pet.weight

    return (
      <div className="card">
        <div className="content">
          <div className="header">
            {/*'♀' OR '♂' */} 
            { name }
            { gender === "female" ? " ♀" : " ♂"}
          </div>
          <div className="meta">
            <span className="date">{ type }</span>
          </div>
          <div className="description">
            <p>age: { age }</p>
            <p>weight: { weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            isAdopted? 
              <button className="ui disabled button">Already adopted</button>
              :
              <button onClick={()=>onAdoptPet(id)} className="ui primary button">Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
