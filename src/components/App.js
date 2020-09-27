import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
     isAdopted: false,
     adoptedPets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onChangeType = type => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      },
    })
  }


  fetchPets = () => {
    let url = '/api/pets';

    if (this.state.filters.type != 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(res => res.json())
      .then(petsArray => this.setState({ pets: petsArray }));
}

  // newArr = pets.map( function(pet){return pet.id})

handleAdoption = (id) => {
let newArr = this.state.pets.map(pet =>{
  if(pet.id === id){
    return {
      ...pet,
isAdopted: !pet.isAdopted
    }
  }
  return pet
})
this.setState({pets: newArr})
    // const newArr = [...this.state.pets]
    // const newArrMap = newArr.map((pet)=>{pet.id})
    // this.setState({
    //   prts: newArrMap.isAdopted.pet.id === false? true:false
    // })
    
  }

    // console.log(newArr)
  //   this.setState({
  //   //   adoptedPets: newArr === handleAdoption ? true : false
  //   // }, () => console.log(this.state.adoptedPets))
  // }

  handleFilter = (t) => {
    console.log("hit filter handler")
    this.setState({
      filters: {
        ...this.state.filters,
      type: t
      }
    }, () => console.log(this.state.filters))
  }




  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
            <Filters filters={this.state.filters.type} onChangeType={this.handleFilter} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
            <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoption}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
