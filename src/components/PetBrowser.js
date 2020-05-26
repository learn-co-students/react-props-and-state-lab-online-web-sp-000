import React from 'react'

import Pet from './Pet'
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants';
import { pipelineTopicExpression } from '@babel/types';

class PetBrowser extends React.Component {
  render() {
    return( 
      <div className="ui cards">
        {this.props.pets.map(petProp => <Pet pet={petProp} onAdoptPet={this.props.onAdoptPet}/>)}
      </div>
    )
  }
}

export default PetBrowser
