import React from "react";

class Pet extends React.Component {
  render() {
    const pet = this.props.pet;
    const genderIcon = pet.gender === "male" ? "♂" : "♀";
    console.log(pet.isAdopted);
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {genderIcon}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight} lbs.</p>
            <p>Adopted: {pet.isAdopted}</p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              className="ui primary button"
              onClick={() => {
                this.props.onAdoptPet(pet.id);
              }}
            >
              Adopt Pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
