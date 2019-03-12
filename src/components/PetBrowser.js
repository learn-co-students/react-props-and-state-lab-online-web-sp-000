import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const petItems = this.props.pets.map(pet => {
      // debugger
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    });
    return <div className="ui cards">
      {/* <Pet /> */}
      {petItems}
    </div> ;
  }
}

export default PetBrowser;
