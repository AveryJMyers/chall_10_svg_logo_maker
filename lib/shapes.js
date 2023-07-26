class Shape {
  constructor() {
    this.color = "";
    this.bgColor = "";
    this.letters = "";
  }
  setColor(color) {
    this.color = color;
  }
  setBgColor(bgColor) {
    this.bgColor = bgColor;
  }
  setLetters(letters) {
    this.letters = letters;
  }
  render() {
    
  }
}

class Triangle extends Shape {
  constructor() {
    super();
    this.triangleColor = "";
    this.textLetters = "";
    this.triangleTextColor = "";
  }

  setTriangleColor(color) {
    this.color = color;
  }

  setTriangleTextColor(color) {
    this.triangleTextColor = color;
  }

  render() {
    const svgTriangle = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    return svgTriangle;
  }
}

class Circle extends Shape {
  constructor() {
    super();
    this.circleColor = "";
    this.textLetters = "";
    this.circleTextColor = "";
  }

  setCircleColor(color) {
    this.color = color;
  }

  setCircleTextColor(color) {
    this.circleTextColor = color;
  }

  render() {
    const svgTriangle = `<circle cx="150" cy="125" r="50" fill="${this.color}" />`;
    return svgTriangle;
  }
}

class Square extends Shape {
  constructor() {
    super();
    this.squareColor = "";
    this.textLetters = "";
    this.squareTextColor = "";
  }

  setSquareColor(color) {
    this.color = color;
  }

  setSquareTextColor(color) {
    this.circleTextColor = color;
  }

  render() {
    const svgTriangle = `<rect x="110" y="91" width="75" height="75" fill="${this.color}" />`;
    return svgTriangle;
  }
}








  module.exports = { Shape, Circle, Square,  Triangle };