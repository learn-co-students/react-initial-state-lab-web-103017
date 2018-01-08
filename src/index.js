import React from 'react';
import ReactDOM from 'react-dom';

import ImageSlider from './components/ImageSlider';
import Bomb from './components/Bomb';

// function tick() {
//   document.getElementById('timer').innerHTML =  parseInt(document.getElementById('timer').innerHTML) - 1
// }

ReactDOM.render(
  <div>
    <ImageSlider></ImageSlider>
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('global')
);

// function countDown() {
//   setTimeout(tick(), 1000)
// }

// countDown()
