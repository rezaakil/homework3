import React, { Component } from 'react';
import './App.css';
//import PropTypes from 'prop-types'


class App extends Component {
  
  render(){
    
  return (


    <div className="App">
    <h1>this is home work</h1>
      {/* {element} */}

      
      <main>
      <Scoreboard/>
      </main>
      <SelectTag/>

    </div>
  );

  }
}
const players = [
  {
    key:1,
    id: 1,
    name: 'Wouter',
    score: 2
  },
  {
    key:2,
    id: 2,
    name: 'Mimi',
    score: 5
  },
  {
    key:3,
    id: 3,
    name: 'Milan',
    score: 4
  },
  {
    key:4,
    id: 3,
    name: 'Milan',
    score: 4
  }
]


const playerst = {
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
//const breeds = Object.keys(player.name)

class Scoreboard extends Component {

  renderPlayer(player) {
    return <Player
      key={Object.values(player.key)}

      name={Object.values(player.name)}
      data={Object.values(player)}
    />
  }
  

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <select>
          {
            players.map(this.renderPlayer)
          }
        </select>
      </div>
    )
  }
}

class Player extends Component {
  

  render() {
    return (
      
      
        <option value={ this.props.data }>{ this.props.name }</option>
      
    )
  }
}


class SelectTag extends Component {
  render() {
    return (
      <select onClick="">
       
        
          <OptionTag name="-- pick a model --" value={2} />
          <OptionTag name="Ivel" value={5} />
          <OptionTag  name="Bally Astrocade (1977)" value={4} />
          <OptionTag name="Sord M200 Smart Home Computer (1971)" value={2} />
          <OptionTag name="Commodore 64 (1982)" value={5} />
         

        

      </select>
    )
  }
}


class OptionTag extends Component {
 

  render() {
    return (
      <option value="1">{ this.props.name }</option>
    )
  }
}

export default App;
