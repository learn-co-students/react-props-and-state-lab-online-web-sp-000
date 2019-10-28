import React from 'react';

class Pet extends React.Component {
  renderCorrectGenderIcon = (gender) => {
    if (gender === 'female') {
      return '♀';
    }
    return '♂';
  };

  renderCorrectButton = (isAdopted) => {
    const {
      pet: { id }
    } = this.props;
    const { onAdoptPet } = this.props;
    if (!isAdopted) {
      return (
        <button className='ui primary button' onClick={() => onAdoptPet(id)}>
          Adopt pet
        </button>
      );
    }
    return <button className='ui disabled button'>Already adopted</button>;
  };

  render() {
    const {
      pet: { name, type, gender, age, weight, isAdopted }
    } = this.props;
    return (
      <div className='card'>
        <div className='content'>
          <a className='header'>
            {this.renderCorrectGenderIcon(gender)}
            {name}
          </a>
          <div className='meta'>
            <span className='date'>{type}</span>
          </div>
          <div className='description'>
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className='extra content'>
          {this.renderCorrectButton(isAdopted)}
        </div>
      </div>
    );
  }
}

export default Pet;
