import React from 'react'

class Pet extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      adoptedStatus: this.props.pet.isAdopted
    }
  }

  handleClick = (event, id) => {
    console.log('click')
    if (this.props.pet.isAdopted === false){
      this.props.onAdoptPet(id)
      this.setState({
        adoptedStatus: this.props.pet.isAdopted
      });
    }

  }

  handleGender = () => {
    console.log('handling gender')
    if (this.props.pet.gender === 'male'){
      return ' ♂ '
    } else if (this.props.pet.gender === 'female'){
      return ' ♀ '
    }
  }

  handleAdopted = () => {
    console.log('handling adopted')
    if (this.state.adoptedStatus === true){
      console.log('adopted')
      return <button className="ui disabled button">Already adopted</button>
    } else if (this.state.adoptedStatus === false) {
      console.log('not adopted')
      return <button onClick={ (event) => this.handleClick(event, this.props.pet.id)} className="ui primary button">Adopt pet</button>
    }
  }

  //adopted = () => {
  //  console.log('rendering adopted')
  //  return (
  //  <div className="extra content">{
  //    this.props.pet.isAdopted
  //    ? <button className="ui primary button">Already adopted</button>
  //    : <button className="ui disabled button">Adopt pet</button>
  //  }
  //  </div>
  //  )
  //}
//
  //notAdopted = () => {
  //  console.log('rendering not adopted')
  //  return (
  //  <div className="extra content">{
  //    this.props.pet.isAdopted
  //    ? <button className="ui disabled button">Already adopted</button>
  //    : <button onClick={ (event) => this.handleClick(event, this.props.pet.id)} className="ui primary button">Adopt pet</button>
  //  }
  //  </div>
  //  )
  //}

  render() {
    console.log('rendering pet')
    return (
      <div className="card">
        <div className="content">
          <p className="header">
          {this.handleGender()}
          {this.props.pet.name}
          </p>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        {this.handleAdopted()}
      </div>
    )
  }
}

export default Pet
