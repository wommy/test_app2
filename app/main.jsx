// require('./main.css');

// var component = require('./component');
// var app = document.createElement('div');

// document.body.appendChild(app);

// app.appendChild(component());

import './main.css';

import React from 'react';
import App from './components/App.jsx';

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  React.render(<App />, app);
}