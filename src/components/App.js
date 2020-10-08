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

  updateFilterType = (value) => {
    this.setState({
      filters: {
        type: value,
      },
    });
  };

  updateAdoptionStatus = (pet_id) => {
    let allPets = this.state.pets;
    allPets.map((pet) => {
      if (pet.id === pet_id) {
        pet.isAdopted = true;
      }
    });

    this.setState({
      pets: allPets,
    });
  };

  petsURL = () => {
    let type = this.state.filters.type;
    let baseURL = "/api/pets";
    if (type === "all") {
      return baseURL;
    } else {
      return `${baseURL}?type=${type}`;
    }
  };

  fetchPets = () => {
    fetch(this.petsURL(), {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((object) =>
        this.setState({
          pets: object,
        })
      );
  };

  componentDidMount() {
    this.fetchPets();
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
                onChangeType={this.updateFilterType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.updateAdoptionStatus}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
