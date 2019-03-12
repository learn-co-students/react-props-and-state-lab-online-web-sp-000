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

  changeTypeCallback(updatedType) {
    this.setState({ filters: { ...this.state.filters, type: updatedType } });
  }

  findPets() {
    let queryString =
      this.state.filters.type === "all"
        ? ""
        : `?type=${this.state.filters.type}`;
    let here = this;
    fetch(`/api/pets${queryString}`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json.length + " pets returned");
        here.setState({ pets: json });
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
                onChangeType={this.changeTypeCallback.bind(this)}
                onFindPetsClick={this.findPets.bind(this)}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
