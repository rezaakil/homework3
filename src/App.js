import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'


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
    id: 1,
    name: 'Wouter',
    score: 2
  },
  {
    id: 2,
    name: 'Mimi',
    score: 5
  },
  {
    id: 3,
    name: 'Milan',
    score: 4
  }
]

class Scoreboard extends Component {

  renderPlayer(player) {
    return <Player
      name={player.name}
      score={player.score}
    />
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <select onClick="">
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
      
      
        <option value={ this.props.score }> test{ this.props.name }</option>
      
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
      <option value={ this.props.value }>{ this.props.name }</option>
    )
  }
}

export default App;
