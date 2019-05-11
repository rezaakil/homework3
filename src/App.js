import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  render(){
    
  return (


    <div className="App">
      {/* {element} */}
      <SelectTag/>

    </div>
  );

  }
}

class SelectTag extends Component {
  state = { active: true }

  optionClick = () => {
    this.setState({
      active: !this.state.active
    })
  }


  render() {
    return (
      <select onClick={this.optionClick }>
       
        
          <OptionTag name="-- pick a model --" value={this.state} />
          <OptionTag name="Ivel" value={this.state} />
          <OptionTag  name="Bally Astrocade (1977)" value={this.state} />
          <OptionTag name="Sord M200 Smart Home Computer (1971)" value={this.state} />
          <OptionTag name="Commodore 64 (1982)" value={this.state} />
         

        

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
