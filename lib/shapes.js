class Shape {
  constructor() {
    this.color = "";
    this.fontColor = "";
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
    console.log('Completed');
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }

  // Set the color for the triangle
  setTriangleColor(color) {
    this.triangleColor = color;
  }

  // Set the letters for the text
  setTextLetters(letters) {
    this.textLetters = letters;
  }

  // Set the color for the text
  setTextColor(color) {
    this.textColor = color;
  }

  // Override the render method to include both the triangle and the text elements in a complete SVG
  render() {
    const svgTriangle = `<polygon points="150, 18 244, 182 56, 182" fill="${this.triangleColor}" />`;
    return `<svg>${svgTriangle}</svg>`; // Include the text and triangle elements in a complete SVG
  }
}







  module.exports = { Shape, Triangle };