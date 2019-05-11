import React, { Component } from 'react';
import './App.css';


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




class Title extends Component {
  
  render() {

    return (

  
    <>
  <h1>{ this.props.content }</h1>
 </>

    )


  }
}



class App extends Component {
  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }
  
  render(){
    
  return (


    <div className="App">
    <h1>this is home work</h1>
      {element}
      <Title content="Some Simple Title homework" />
      <p>The light switch is <b>{ this.state.active ? 'on' : 'off' }</b></p>
      <button onClick={this.toggle}>Toggle homework</button>
      <select onClick="">
    <option value="">-- pick a model --</option>
    <option value="">Ivel</option>
    <option value="Bally Astrocade">Bally Astrocade (1977)</option>
    <option value="Sord M200 Smart Home Computer">Sord M200 Smart Home Computer (1971)</option>
    <option value="Commodore 64">Commodore 64 (1982)</option>
  </select>


    </div>
  );

  }
}

export default App;
