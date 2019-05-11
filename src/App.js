import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'


class App extends Component {
  
  render(){
    
  return (


    <div className="App">
    <h1>this is home work</h1>
      {/* {element} */}

      <select onClick="">
        <option value="">-- pick a model --</option>
        <option value="">Ivel</option>
        <option value="Bally Astrocade">Bally Astrocade (1977)</option>
        <option value="Sord M200 Smart Home Computer">Sord M200 Smart Home Computer (1971)</option>
        <option value="Commodore 64">Commodore 64 (1982)</option>
      </select>
      <Title content="Some Simple Title" />
      <LightSwitch />
      <UserBoard/>

    </div>
  );

  }
}

class Title extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }
  render() {
    return (
        <>
        <h1>{ this.props.content }</h1>
        </>
    )
  }
}

class LightSwitch extends Component {
  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (<div>
      <p>The light switch is <b>{ this.state.active ? 'on' : 'off' }</b></p>
      <button onClick={this.toggle}>Toggle</button>
    </div>)
  }
}

class UserBoard extends Component {
  render() {
    return <div>
          <User name="Chuck"  />
          <User name="Bruce"  />
          <User name="Arnold"  />
          <User name="Sly"  />

    </div>
  }
}
class User extends Component {
  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {

    return <div><p>User here: <b>{ this.props.name }</b></p>
    <p>{ this.props.name } is <b>{ this.state.active ? 'Not' : '' }</b> present</p>
    <button onClick={this.toggle}>Toggle</button>
    </div>

  }
}



export default App;
