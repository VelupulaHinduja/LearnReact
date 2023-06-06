import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  render() {
    console.log("Click counter Two")
    const {count, incrementCount} = this.props
    return (
      <button onClick={incrementCount}>Clicked {count} times</button>
    )
  }
}

export default ClickCounterTwo