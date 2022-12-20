import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count : this.props.initCount || 0
    }

    componentDidMount(){
      this.props.getTotal(this.state.count);
    }

    increment = () => {
        this.setState(prevState => ({count : this.props.initCount ? prevState.count + this.props.initCount : prevState.count + 1}));
        this.props.getTotal(this.props.initCount || 1)
    }

    deccrement = () => {
        if(this.state.count > 0){
            this.setState(prevState => ({count : this.props.initCount ? prevState.count - this.props.initCount : prevState.count - 1}))   
            this.props.getTotal(-this.props.initCount || -1)
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
