import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'


class App extends Component {
  render(){
    
  return (
    <div className="App">
  
    <Select/>

    </div>
  );

  }
}

class Select extends Component {
  state = {
    data:[
    {
      id: 1,
      name: "Ivel Z3",
      manufacturer:  "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    {
      id: 2,
      name: "Bally Astrocade",
      manufacturer:"Bally Consumer Products",
      year: 1977,
      origin: "USA",
    },
    {
      id: 3,
      name: "Sord M200 Smart Home Computer",
      manufacturer:"Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    {
      id: 4,
      name: "Commodore 64",
      manufacturer:  "Commodore",
      year: 1982,
      origin: "USA"
    }
  ]
}

  renderComputer = (computer) => {
  return <Option
    id={computer.id}
    name={computer.name}
    key={computer.id}
    year={computer.year}
  />
}

updateSelection = (event) => {
  event.preventDefault();
  
  this.setState({value: event.target.value});
  localStorage.setItem(event.target.key,event.target.value);
  console.log({value: event.target.value})
}

render = (computer) => {
  return (
    <div>
      
      <select value={this.state.data.name} onChange={this.updateSelection} >
      <option value="">-- pick a model --</option>
        {
          this.state.data
          .map(this.renderComputer)
        }
      </select>
    </div>
  )
}
}

class Option extends Component {
  static propTypes = {
      name: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired
  }

  handleOnClick = () => {
  
  }
  
render = () => {
  return (
    <option value={this.props.name} >{ this.props.name } ({ this.props.year })
    </option>
  )
  }
}


export default App;
