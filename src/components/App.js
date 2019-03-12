import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  filterPets(updatedType) {
    this.setState({ filters: { ...this.state.filters, type: updatedType } });
  }

  findPets() {
    const queryString =
      this.state.filters.type === "all"
        ? ""
        : `?type=${this.state.filters.type}`;
    const here = this;
    fetch(`/api/pets${queryString}`)
      .then(res => res.json())
      .then(json => here.setState({ pets: json }));
  }

  adoptPet(id) {
    let pets = [...this.state.pets]
    let pet = pets.find(p => p.id === id);
    pet.isAdopted = true
    this.setState({ pets: pets });
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
                onChangeType={this.filterPets.bind(this)}
                onFindPetsClick={this.findPets.bind(this)}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.adoptPet.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
