import React from "react";

class Pet extends React.Component {
  showGender = () => {
    if (this.props.pet.gender === "female") {
      return "♀";
    } else if (this.props.pet.gender === "male") {
      return "♂";
    } else {
      return "";
    }
  };

  adopted = () => {
    if (this.props.pet.isAdopted === false) {
      return (
        <button
          className="ui primary button"
          onClick={() => this.props.onAdoptPet(this.props.pet.id)}
        >
          Adopt pet
        </button>
      );
    } else if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>;
    }
  };
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.showGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content"></div>
        {this.adopted()}
      </div>
    );
  }
}

export default Pet;
