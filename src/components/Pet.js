import React from 'react';

class Pet extends React.Component {
  renderCorrectGenderIcon = (gender) => {
    if (gender === 'female') {
      return '♀';
    }
    return '♂';
  };

  hideButton = (isAdopted) => {
    console.log(isAdopted);

    // if (!isAdopted) {
    //   return <button style={{ display: 'none' }}>Adopt pet</button>;
    // }
  };

  render() {
    const {
      pet: { id, name, type, gender, age, weight, isAdopted }
    } = this.props;
    console.log(this.props.pet.isAdopted);

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
          <button className='ui disabled button'>Already adopted</button>
          <button
            className='ui primary button'
            petid={id}
            // onClick={() => {
            //   this.props.onAdoptPet(id);
            //   this.hideButton(isAdopted);
            // }}
            onClick={() => this.props.onAdoptPet(id)}
            onClick={() => this.hideButton(isAdopted)}
          >
            Adopt pet
          </button>
        </div>
      </div>
    );
  }
}

export default Pet;
