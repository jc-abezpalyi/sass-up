// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';

import createStars from './modules/task3Stars';
import createDots from './modules/task2Dots';
import dotsHue from './modules/task4HUE';
import randomBalls from './modules/task10Balls';
// When DOM is ready
$(() => {
  createStars();
  createDots();
  dotsHue();
  randomBalls();
});
