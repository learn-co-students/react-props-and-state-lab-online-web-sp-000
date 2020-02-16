import React from 'react'

class Pet extends React.Component {
    render() {

    // intro to object destructuring

    // destructure the incoming prop object:
    const { id, name, type, age, weight, gender, isAdopted } = this.props.pet

    // w/o destructuring:
    // const name = this.props.pet.name
    // const typee = this.props.pet.typee
    // const age = this.props.pet.age
    // const weight = this.props.pet.weight
    // const isAdopted = this.props.pet.isAdopted

    // NOTE: use 'const' to destructure b/c you should NEVER
    //       be reassigning any pars of a prop.

    const { onAdoptPet } = this.props

    return (
        <div className="card">
            <div className="content">
                <a href="#" className="header">
                    {name}
                    {gender === 'female' ? ' ♀ ' : ' ♂ '}
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
                {!isAdopted ? (
                    <button onClick={() => onAdoptPet(id)} className="ui primary button">Adopt pet</button>
                    ) : (
                    <button className="ui disabled button">Already adopted</button>
                    )
                }
            </div>
        </div>
        )
    }
}



export default Pet

// NOTE: Passing a Callback:
// in vanillaJS, it's the same as adding event listener

// btn.addEventListener("click", ____ )

// passing a function reference works when you don't need
// any particular arguments.
