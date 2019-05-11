import React, { Component } from 'react';
import './App.css';

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez',
//   occupation:'student'
// };
const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

const formatData=(data) => data["Ivel Z3"].manufacturer+data["Bally Astrocade"].manufacturer+data["Sord M200 Smart Home Computer"].manufacturer 

const element = (
  <h1>
    Hello data, {formatData(data)}!
  </h1>
);

//console.log(data["Ivel Z3"])


class App extends Component {
  
  render(){
    
  return (


    <div className="App">
    <h1>this is home work</h1>
      {element}
     
    </div>
  );

  }
}

export default App;
