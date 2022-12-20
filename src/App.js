import './App.css';
import Counter from './Counter';
import React , { Component } from 'react';

class App extends Component {

  state = {
    total : 0
  }
  
  getTotal = (num) => {
    this.setState(prevState => ({total : prevState.total + num}))
  }

  render(){
    return (
      <div className="App">
        <Counter initCount={5} getTotal={this.getTotal} />
        <Counter initCount={3} getTotal={this.getTotal} />
        <Counter  getTotal={this.getTotal} />
        <Counter initCount={0} getTotal={this.getTotal} />
        <p>Total : {this.state.total}</p>
      </div>
    );
  }
}

export default App;
