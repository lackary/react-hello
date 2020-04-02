import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      <div>
        <h2>
          {this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'TEST4' : 'TEST3'}
      </button>
    );
  }
}

const user = {
  firstName: 'Henry',
  lastName: 'Huang'
};

function formatName(user) {
  return user.firstName+ ' ' + user.lastName;
}

function App() {
  const element = <div>{new Date().toLocaleTimeString()}.</div>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {formatName(user)}
        </a>
        <Toggle />
      </header>
      <Clock />
    </div>
  );
}

export default App;
