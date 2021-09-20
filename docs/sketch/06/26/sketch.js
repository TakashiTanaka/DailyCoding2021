/* reference: 
http://www.bnn.co.jp/books/7199/
https://infosmith.biz/blog/it/p5js-conways-game-of-life
*/

let _cellArray = [];
let _cellSize = 25;
let _numX, _numY;

function setup() {
  createCanvas(1000, 1000);
  _numX = floor(width / _cellSize);
  _numY = floor(height / _cellSize);
  for (let y = 0; y < _numY; y++) {
    _cellArray.push([]);
  }
  restart();
}

function restart() {
  for (let y = 0; y < _numY; y++) {
    for (let x = 0; x < _numX; x++) {
      //CellクラスのインスタンスのnewCellを作り、
      //それを多次元配列_cellArrayに入れている
      let newCell = new Cell(x, y);
      _cellArray[x][y] = newCell;
    }
  }
  for (let y = 0; y < _numY; y++) {
    for (let x = 0; x < _numX; x++) {
      let above = y - 1;
      let below = y + 1;
      let left = x - 1;
      let right = x + 1;

      if (above < 0) {
        above = _numY - 1;
      }
      if (below == _numY) {
        below = 0;
      }
      if (left < 0) {
        left = _numX - 1;
      }
      if (right == _numX) {
        right = 0;
      }
      _cellArray[x][y].addNeighbour(_cellArray[left][above]);
      _cellArray[x][y].addNeighbour(_cellArray[left][y]);
      _cellArray[x][y].addNeighbour(_cellArray[left][below]);
      _cellArray[x][y].addNeighbour(_cellArray[x][below]);
      _cellArray[x][y].addNeighbour(_cellArray[right][below]);
      _cellArray[x][y].addNeighbour(_cellArray[right][y]);
      _cellArray[x][y].addNeighbour(_cellArray[right][above]);
      _cellArray[x][y].addNeighbour(_cellArray[x][above]);
    }
  }
}

function draw() {
  background(255);
  for (let y = 0; y < _numY; y++) {
    for (let x = 0; x < _numX; x++) {
      _cellArray[x][y].clacNextState();
    }
  }
  // translate(_cellSize / 2, _cellSize / 2);
  for (let y = 0; y < _numY; y++) {
    for (let x = 0; x < _numX; x++) {
      _cellArray[x][y].drawMe();
    }
  }
}

function mouseClicked() {
  restart();
}

class Cell {
  constructor(ex, why) {
    this.x = ex * _cellSize;
    this.y = why * _cellSize;
    if (random(2) > 1) {
      this.nextState = true;
    } else {
      this.nextState = false;
    }
    this.state = this.nextState;
    this.neighbours = [];
  }
  addNeighbour(cell) {
    this.neighbours.push(cell);
  }
  clacNextState() {
    this.liveCount = 0;
    for (let i = 0; i < this.neighbours.length; i++) {
      if (this.neighbours[i].state == true) {
        this.liveCount++;
      }
    }
    if (this.state == true) {
      if ((this.liveCount == 2) || (this.liveCount == 3)) {
        this.nextState = true;
      } else {
        this.nextState = false;
      }
    } else {
      if (this.liveCount == 3) {
        this.nextState = true;
      } else {
        this.nextState = false;
      }
    }
  }
  drawMe() {
    this.state = this.nextState;
    stroke(0);
    if (this.state == true) {
      fill(0);
    } else {
      fill(255);
    }
    rect(this.x, this.y, _cellSize, _cellSize);
  }
}