import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count : 0
    }

    increment = () => {
        this.setState(prevState => ({count : prevState.count + 1}));
        this.props.getTotal(1)
    }

    deccrement = () => {
        if(this.state.count > 0){
            this.setState(prevState => ({count : prevState.count - 1}))   
            this.props.getTotal(-1)
        }
    }

  render() {
    return (
      <div className='counter_box'>
        <p>{this.state.count}</p>
        <button className='btn deccress' onClick={this.deccrement}>-</button>
        <button className='btn inccress' onClick={this.increment}>+</button>
      </div>
    )
  }
}
