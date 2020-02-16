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

        // 1. one way to bind keyword this to class methods: .bind()
        //    this.onChangeType = this.onChangeType.bind(this)

        // NOTE: .bind() might have a slighter advantage in performance.
    }

    // 1.
    // onChangeType(event) {
    //     this.setState({
    //         filters: {
    //             type: event.target.value
    //         }
    //     })
    // }

    // 2. second way to bind keyword this to class methods: arrow functions
    // onChangeType = (e) => {
    //     console.log("@@this.event.target", e.target.value)
    //
    //     this.setState({
    //         filters: {
    //             type: e.target.value
    //         }
    //     })
    // }


    // Github Solution:
    onChangeType = ({ target: { value } }) => {
        this.setState({ filters: { ...this.state.filters, type: value } });
    };

    onFindPetsClick = () => {
        console.log('Find Pets has been clicked')

        // initally started with 'const' but thought: is the url going to have to change?
        // since it does need to change when switching btwn types, use 'let'
        let url = '/api/pets'

        if (this.state.filters.type !== 'all') {
            url += `?type=${this.state.filters.type}`
        }

        fetch(url)
        .then(resp => resp.json())
        .then(petsJSON => {
            this.setState({
                pets: petsJSON
            }, () => console.log('after fetching - the state is now: ', this.state))
        })

        // NOTE: if you put the console.log on line 49 - after the 2nd .then() -
        //       you're not likely to see the updated results.
        //       the place to put it to see your updated state would be inside
        //       of the 2nd optional parameter to setState() which is a callback.

        //       w/o the console.log:
        //       .then(petsJSON => {
        //          this.setState({
        //              pets: petsJSON
        //          })
        //       })            - or -

        //       .then(petsJSON => this.setState({ pets: petsJSON }) )
    }

    onAdoptPet = (petId) => {
        console.log('onAdoptPet called')
        console.log('pet id clicked: ', petId)

        // not allowed b/c you can't mutate object directly:
        // pet.isAdopted = true

        // you must make a copy first, set the isAdopted attribute to true, then use `.setState()` to update state

        // Choose your implementation of choice:
        // 1. find the indexOf the pet in this.props.pets and use `.slice()`
        // 2. make a copy of the pet, change isAdopted, then make a copy of the array using `.map` and insert the changed pet in the right index, then replace the instance inside of the array.
        // 3. make an entire copy of this.state.pets, find the pet, then change the pet instance's isAdopted attribute and replace the whole array.

        // make copy of the this.state.pets array using any of these three implementations:
        // 1. let petsArrayCopy = [...this.state.pets]
        // 2. let petsArrayCopy = this.state.pets.slice()
        // 3. let petsArrayCopy = this.state.pets.map(p => p)

        // find the passed in pet inside of petsArrayCopy:
        // let petPassedIn = petsArrayCopy.find(pet => pet.id === id)

        // console.log('@@petPassedIn: ', petPassedIn)

        // change this.state.pets to petsArrayCopy using `.setState()`
        // this.setState({
        //     pets: petsArrayCopy
        // })


        // Github Solution:
        const petsArrayCopy = this.state.pets.map(p => {
            return p.id === petId ? { ...p, isAdopted: true } : p;
        });

        this.setState({
            pets: petsArrayCopy
        });
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

                        <Filters
                            onChangeType={this.onChangeType}
                            onFindPetsClick={this.onFindPetsClick}
                            myArray={[2, 4, 6, 8]}
                        />
                    </div>

                    <div className="twelve wide column">

                        <PetBrowser
                            pets={this.state.pets}
                            onAdoptPet={this.onAdoptPet}
                        />
                    </div>

                </div>
            </div>

        </div>
        )
    }
}

export default App

// Learning React can be a challenge b/c the curly braces are used for different things:
// 1. object destructuring
// 2. a delimiter in JSX
// 3. interpolating standard JavaScript values by wrapping objects, function bodies and blocks

// Explanation:
// <div className="four wide column">
//     // onChangeType={this.onChangeType} is a callback prop
//     <Filters
//         onChangeType={this.onChangeType}
//         onFindPetsClick={this.onFindPetsClick}
//         myArray={[2, 4, 6, 8]}
//     />   // child 1
// </div>
//
// <div className="twelve wide column">
//     // passing state down to PetBrowser Component
//     <PetBrowser
//         pets={this.state.pets}
//         onAdoptPet={this.onAdoptPet}
//     />  // child 2
// </div>


// Random Toggle Logic:
// onToggleAdoptPet = (id) => {
    // console.log('onAdoptPet called')

    // error:
    // const pet = this.state.pets.find(p => p.id === id)

    // fix:
    // const pet2 = Object.assign({}, this.state.pets.find(p => p.id === id))
    // - or -
    // const pet2 = {...this.state.pets.find(p => p.id === id)}
    //
    // console.log('chosen pet id: ', pet2)
    // console.log('pet is adopted: ', pet.isAdopted)
    //
    // pet.isAdopted = pet.isAdopted ? false : true
    //
    // console.log('after pet change: ', pet.isAdopted)
    //
    // // set the state of the adopted pet to the opposite of current state
    // const index = this.state.pets.indexOf(pet2)
    //
    // this.setState({
    //     pets: [...this.state.pets.slice(0, index), pet, ...this.state.pets(index, this.state.pets.length)]
    // })
// }
