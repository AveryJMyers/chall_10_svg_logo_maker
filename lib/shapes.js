class Shape{
    constructor(){
        this.color = "";
        this.bgColor = "";
        this.letters = "";
    }
    setColor(color){
        this.color = color;
    }
    setBgColor(bgColor){
        this.bgColor = bgColor;
    }
    setLetters(letters){
        this.letters = letters;
    }
    render(){
        console.log('Completed');
    }
}

class Triangle extends Shape {
    constructor() {
      super();
    }
  
    render() {
      const svgTriangle = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,18 244,182 56,182" fill="${this.color}" />
        <text x="150" y="130" text-anchor="middle" font-size="40px" fill="${this.bgColor}">
            ${this.letters}
        </text>
      </svg>`;
      return svgTriangle;
    }
  }

class Circle extends Shape{
    constructor(){
        super();
    }
    render() {
        const svgCircle = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="20" stroke-width="5" fill="black" />
        <text x="150" y="104" text-anchor="middle" font-size="10px" fill="white">${this.letters}</text>
      </svg>`;
        return svgCircle;
      }
    }

class Square extends Shape {
    constructor() {
      super();
    }
  
    render() {
      const svgSquare = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="62.5" y="62.5" width="75" height="75" fill="${this.color}" />
        <text x="100" y="105" text-anchor="middle" "font-size=40px" fill="${this.bgColor}">
          ${this.letters}
        </text>
      </svg>`;
      return svgSquare;
    }
  }

  module.exports = { Shape, Triangle, Circle, Square };