import React from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }
  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value,
      },
    });
  };
  onFindPetsClick = () => {
    const fetchUrl =
      this.state.filters.type === "all"
        ? "/api/pets"
        : `/api/pets?type=${this.state.filters.type}`;
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pets: data,
        });
      });
  };
  onAdoptPet = (id) => {
    console.log(`onAdoptPet called, id is ${id}`);
    const pet = this.state.pets.find((pet) => pet.id === id);
    pet.isAdopted = true;
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
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}
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
