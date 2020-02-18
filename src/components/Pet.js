import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.name}{' '}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
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
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
            onClick={() => this.props.onAdoptPet(this.props.pet.id)}
            className="ui primary button">Adopt pet</button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet

//Should receive a pet prop. Use the attributes in this data to render the pet card correctly. It should show
//the pet's name, type, age and weight. Based on the pet's gender, the component also needs to contain either
//a male (♂) or female (♀) symbol.

//Each pet may or may not have an isAdopted property set to true. Using this property, render the correct
//button in the pet's card; if the pet is adopted, show the disabled button. Otherwise, show the primary
//button to adopt the pet.

//Should receive an onAdoptPet callback prop. This callback prop gets called with the pet's id when the
//user clicks the adopt pet button — not when they click the disabled button!