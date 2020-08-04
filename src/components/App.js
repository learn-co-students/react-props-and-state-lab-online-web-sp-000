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
      },

    isClicked:false
    }
  }
 

  fetchPets() {
     let  animalApi = '/api/pets'
     // we need a variable to put condition statment 
     //we dont want to find all the pets we want to find some pets 
     //when someone clicked to drop down State got to updated 
     if(this.state.filters.type !== 'all'){
       // so we check the filter part if its not all type 
       //we need to add our query (Url) EXTRA PART 
       //? help for every browser when you says give me to key value pair (props.value)
      animalApi += `?type=${this.state.filters.type}`
      //what we use state.filter to updated API PART fetch fine 
     }
       fetch(animalApi)
       .then(r => r.json())
       .then(json =>{
        this.setState({
          pets:json,
         
        })
        console.log(json)
       } )
       //   You can run fetch in the console so you can see that you have written it correctly.
       //  If the type is 'all', send a request to /api/pets
       //  If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig.
      }
      
      
      onChangeType = event => {
        this.setState({
          filters:{
            ...this.state.filters,
            type: event.target.value
          }
          // we determined to target value and decide what to do with that 
          //most likely update to state with setState
          //the confusion part how i include this part to my fetch request 
        })
      }
      onFindPetsClick = event => {
      this.fetchPets()
      }
      
     // I need a function the handles when the user clicked on adopt 
     // You will have to in charge of changing status of this animals adopt or not adopted
     // Its going to set app component how to create another function call adopt animal when it gets adopted
     // the function will be charge of receving as argument the pet id want  adopt
     // there is a data object is a property isAdopted: false
     // it should be change of isAdopted:true
     // the function on adapt receives an argument a petId and base on padid only updateds 
     // the animal which is adopted state will reflect that there is something new
     // its gonna give and id essesntial you will find pet by id and update just one property isAdopted:
     // when you change this ped all group will re-set in state and you use setState again.
     // Because i just did one change and i have to setState again
     //1-function argument which is Id then you can start think how can i find pet agiving an id
     //PROPS ARE  PASS DOWN I HAVE TO USE THEM STATE IS SOMETHING WHEN USER CLICK I UPDATE STATE  
      
     
     adoptPets(id){
       console.log(this.state,"adoptPetState")
      this.fetchPets().then(response => {
         this.setState({
           id: response.id
         });
        });
     
    



      }
      
      
      
      
     

  // line 50 onChangeType={this.onChangeType} its props which is goes to lower level child component 
  // props creating in parent component and goes down to child component just one direction 
  

  render() {

    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters  onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />           
            </div>
            <div className="twelve wide column">
              <PetBrowser adoptButton={this.adoptPets}
              
                pets={this.state.pets}
              />

              
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// Finally, App should pass a callback prop, onAdoptPet, to <PetBrowser />. (line115)


export default App
