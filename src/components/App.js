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

  // This callback needs to update<App /> 's state.filters.type
  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  onFindPetsClick = () => {
    let URL = "/api/pets";
    if (this.state.filters.type !== "all") {
      URL += `?type=${this.state.filters.type}`;
    }
    fetch(URL)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets }));
  };

  onAdoptPet = id => {
    const updatedPets = this.state.pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    this.setState({ pets: updatedPets });
  };

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
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
