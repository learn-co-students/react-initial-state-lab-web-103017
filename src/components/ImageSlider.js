// Bomb Component Code Goes Here
import React from 'react';

class ImageSlider extends React.Component {
  constructor() {
    super();
    // initial state defined here
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <div>I am on slide {this.state.currentSlideIndex}</div>
    );
  }

} // end of class

export default ImageSlider;
