// Bomb Component Code Goes Here
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    let message = `${this.state.secondsLeft} seconds left before I go boom!`

    if (this.state.secondsLeft  === 0) {
      message = 'Boom!'
    }

    return message;
  }
}
