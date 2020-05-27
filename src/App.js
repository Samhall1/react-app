import React from 'react';
import './App.css';
import Person from './components/Person.js'; // The extension of js is optional
import Pets from './components/Pets';

class App extends React.Component {
  render (){
      return(
          <div>
            <Person name="Sam" />
            <Pets petName="Oliver"/>
          </div>
      )
  }
}



export default App;
