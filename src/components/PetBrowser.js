import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const { pets, onAdoptPet } = this.props;
    return (
      <div>
        {pets.map((pet) => (
          <Pet pet={pet} onAdoptPet={onAdoptPet} />
        ))}
      </div>
    );
  }
}

export default PetBrowser;
