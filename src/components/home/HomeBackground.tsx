import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

// interface props {}

interface cell {
  x: number;
  y: number;
  p5: p5Types;
  direction: number;
  drawCell: () => void;
}

interface runner {
  x: number;
  y: number;
  draw: () => void;
}

export default function P5Background() {
  const cellSize = 50;
  const movesPerCell = 4;
  const nOfRunners = 20;
  const randomTurnChance = 10;
  let runners: runner[] = [];
  let cells: cell[] = [];

  const colors: string[] = [
    '#1be7ff',
    '#6eeb83',
    '#e4ff1a',
    '#ffb800',
    '#FF5714'
  ];

  function setup(p5: p5Types, canvasParentRef: Element) {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(220);
    p5.frameRate(8);
    generateCells(p5);
    generateRunners(p5);
  }
  function draw(p5: p5Types) {
    p5.stroke(0);
    p5.background(220, 150);
    drawCells(p5);
    handleRandomTurns(p5);
    runners.forEach(runner => {
      runner.draw();
    });
  }

  function windowResized(p5: p5Types) {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    generateCells(p5);
    generateRunners(p5);
  }

  function generateCells(p5: p5Types) {
    cells = [];
    for (let row = -1; row < p5.windowWidth / cellSize + 1; row++) {
      const x = row * cellSize + cellSize / 2;
      for (let col = -1; col < p5.windowHeight / cellSize + 1; col++) {
        const y = col * cellSize + cellSize / 2;
        cells.push(new Cell(x, y, p5));
      }
    }
  }

  function generateRunners(p5: p5Types) {
    runners = [];
    for (let i = 0; i < nOfRunners; i++) {
      const color: string = colors[i < colors.length ? i : i % colors.length];
      runners.push(new Runner(p5, color));
    }
  }

  function drawCells(p5: p5Types) {
    p5.strokeWeight(2);
    cells.forEach(cell => {
      cell.drawCell();
    });
  }

  //   function drawPoints(p5: p5Types) {
  //     cells.forEach(cell => {
  //       p5.strokeWeight(2);
  //       p5.point(cell.x, cell.y);
  //     });
  //   }

  class Cell {
    x: number;
    y: number;
    direction: number;
    p5: p5Types;

    constructor(x: number, y: number, p5: p5Types) {
      this.x = x;
      this.y = y;
      this.direction = p5.random(-1, 1) < 0 ? 1 : -1;
      this.p5 = p5;
    }
    drawCell() {
      const p5 = this.p5;
      const l = cellSize / 2;
      p5.line(
        this.x + this.direction * l,
        this.y + l,
        this.x - this.direction * l,
        this.y - l
      );
    }
    flipCell() {
      const p5 = this.p5;
      p5.strokeWeight(cellSize * 0.4);
      p5.stroke(220);
      this.drawCell();
      this.direction *= -1;
      p5.strokeWeight(2);
      p5.stroke(0);
      this.drawCell();
    }
  }
  class Runner {
    x: number;
    y: number;
    xDir: number;
    yDir: number;
    targetX: number;
    targetY: number;
    baseSize: number;
    age: number;
    maxAge: number;
    movementToggle: boolean;
    cell1: cell;
    cell2: cell;
    p5: p5Types;
    color: string;

    constructor(p5: p5Types, color: string) {
      this.cell1 = cells[0];
      this.cell2 = cells[1];
      this.x = 0;
      this.y = 0;
      this.xDir = 0;
      this.yDir = 0;
      this.targetX = 1;
      this.targetY = 1;
      this.baseSize = p5.random(0.05, 0.3) * cellSize;
      this.age = p5.random(p5.TWO_PI);
      this.maxAge = p5.random(100, 500);
      this.movementToggle = false;
      this.p5 = p5;
      this.color = color;
      this.randomStart();
    }
    findNext() {
      const currentDirection =
        (this.cell2.x - this.cell1.x + (this.cell2.y - this.cell1.y)) /
        cellSize;
      const nextDirection =
        this.cell2.direction < 0 ? currentDirection * -1 : currentDirection;

      const nextX = this.movementToggle
        ? this.cell2.x + nextDirection * cellSize
        : this.cell2.x;
      const nextY = !this.movementToggle
        ? this.cell2.y + nextDirection * cellSize
        : this.cell2.y;

      const nextCell = cells.find(cell => cell.x === nextX && cell.y === nextY);

      this.cell1 = this.cell2;
      this.cell2 = nextCell ? nextCell : this.cell2;

      this.movementToggle = !this.movementToggle;
      this.cell2 ? this.findTargetPosition() : this.randomStart();
    }
    findTargetPosition() {
      this.targetX = this.cell1.x + (this.cell2.x - this.cell1.x) / 2;
      this.targetY = this.cell1.y + (this.cell2.y - this.cell1.y) / 2;
      this.xDir = this.targetX - this.x > 0 ? 1 : -1;
      this.yDir = this.targetY - this.y > 0 ? 1 : -1;
    }
    draw() {
      const p5 = this.p5;
      this.move();
      p5.stroke(p5.color(this.color));
      p5.strokeWeight(Math.sin(this.age / 5) * cellSize * 0.05 + this.baseSize);
      p5.point(this.x, this.y);
      this.age++;
      this.age >= this.maxAge && this.randomStart();
      // p5.stroke(p5.color(255, 0, 0));
      // p5.stroke(0, 50);
      // p5.point(this.targetX, this.targetY);
      // p5.point(this.cell1.x, this.cell1.y);
      // p5.point(this.cell2.x, this.cell2.y);
      // p5.line(this.x, this.y, this.x + this.xDir * 10, this.y + this.yDir * 10);
    }
    move() {
      this.isOnTarget()
        ? this.findNext()
        : this.isOutOfBounds()
        ? this.randomStart()
        : this.findTargetPosition();
      this.x += (this.xDir * cellSize) / movesPerCell;
      this.y += (this.yDir * cellSize) / movesPerCell;
    }
    isOnTarget() {
      const result =
        Math.abs(this.x - this.targetX) < cellSize / movesPerCell &&
        Math.abs(this.y - this.targetY) < cellSize / movesPerCell;
      return result;
    }
    isOutOfBounds() {
      return (
        this.x < 0 - cellSize ||
        this.x > this.p5.width + cellSize ||
        this.y < 0 - cellSize ||
        this.y > this.p5.height + cellSize
      );
    }
    randomStart() {
      const p5 = this.p5;
      this.age = p5.random(p5.TWO_PI);
      const allButEdges = cells.filter(cell => {
        return (
          cell.x > 0 && cell.x < p5.width && cell.y > 0 && cell.y < p5.height
        );
      });
      this.cell1 = p5.random(allButEdges);
      this.cell2 =
        cells.find(
          cell => cell.x === this.cell1.x && cell.y === this.cell1.y + cellSize
        ) || cells[0];
      this.findTargetPosition();
      this.x = this.targetX;
      this.y = this.targetY;
    }
  }

  function handleRandomTurns(p5: p5Types) {
    if (p5.random(randomTurnChance) <= 1) {
      p5.random(cells)?.flipCell();
    }
  }

  return (
    <div className='HomeBackground'>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
}
