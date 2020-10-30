import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './fetch-setup';

ReactDOM.render(<App onChangeType={event => this.updateFilters(event)}/>, document.getElementById('root'));
