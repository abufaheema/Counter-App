import React, { Component } from 'react';

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Counter from './Counter';

 class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <Counter />

      </React.Fragment>
    );
  }
 }
  
 export default App;