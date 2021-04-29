import React from 'react'

class Pet extends React.Component {
  constructor(props){
    super();
    this.state = {id: props.pet.id}
  }

  adopt = () => {
    this.props.onAdoptPet(this.state.id)
  }

  gender = (gender) => {
    if(gender === 'female') return '♀'
    else if(gender === 'male') return '♂'
  }
  
  
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <h3 className="header">
            {this.gender(this.props.pet.gender)}
            {this.props.pet.name}
          </h3>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.adopt}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet

// 1.  Should receive a `pet` prop. Use the attributes in this data to render the
//     pet card correctly. It should show the pet's `name`, `type`, `age` and
//     `weight`. Based on the pet's `gender`, the component also needs to contain
//     either a male (`♂`) or female (`♀`) symbol.

// 2.  Each `pet` _may or may not_ have an `isAdopted` property set to `true`.
//     Using this property, render the correct button in the pet's card; if the pet
//     is adopted, show the disabled button. Otherwise, show the primary button to
//     adopt the pet.

// 3.  Should receive an `onAdoptPet` callback prop. This callback prop gets called
//     with the pet's `id` when the user clicks the adopt pet button — _not_ when
//     they click the disabled button!