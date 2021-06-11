import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
 handleTypeChage = (type)=> {
 
  this.setState({
    filters: {
        ...this.state.filters,
      type: type
    }
  })
 }



  handleOnFindPetClick = ()=>{

    if (this.state.filters.type === "all"){
      return fetch('/api/pets')
      .then(response => {
        return response.json()
      })
      .then(data => {
       this.setState({
         pets:  data
       })

      }).catch(e =>{
        console.log(e)
      })
  }
    else if(this.state.filters.type === "cat"){
      return fetch('/api/pets?type=cat')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          pets:  data
        })
        
      }).catch(e =>{
        
      })
    
   } else if (this.state.filters.type === "dog"){
      return fetch('/api/pets?type=dog')
      .then(response => {
         return response.json()
      })
      .then(data => {
        this.setState({
         pets:  data
       })
       
      }).catch(e =>{
        
      })

   } else if (this.state.filters.type === "micropig"){
      return fetch('/api/pets?type=micropig')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          pets:  data
        })
        
      }).catch(e =>{
        console.log(e)
      })
   }
 }

 onAdoptPetHandle = (e)=>{
   const newArrey = [...this.state.pets]
   let foundPet = newArrey.find(pet=> e === pet.id)
  foundPet.isAdopted = true
  this.setState({
    pets: newArrey
  })
 }


  render() {
    console.log(this.state.pets)
    return ( 
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType= { this.handleTypeChage} onFindPetsClick={this.handleOnFindPetClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPetHandle}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
