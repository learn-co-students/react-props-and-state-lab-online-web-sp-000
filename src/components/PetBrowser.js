import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  parsePets = () => {
    return this.props.pets.map(pet => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} key={pet.id} />
    ));
  };

  render() {
    return <div className="ui cards">{this.parsePets()}</div>;
  }
}

export default PetBrowser;
