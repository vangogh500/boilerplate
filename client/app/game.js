/*
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.arc(100,75,50,0,2*Math.PI);
ctx.fillStyle = 'red';
ctx.fill();


ctx.fillStyle= 'blue';
ctx.arc(0,0,50,0,2*Math.PI);
ctx.fill();
*/

import Board from './structures/board.js';

export function main() {
  var theBoard = new Board(0,0,0);
  theBoard.createMap();
  theBoard.drawMap();
}
