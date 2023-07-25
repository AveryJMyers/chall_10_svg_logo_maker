const fs = require('fs');
const inquirer = require('inquirer');
const {  Shape, Triangle } = require('./lib/shapes.js');
const { isColorValid } = require('./lib/validate.js');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)




const questions = [
    'Which letters do you want? (Max 3)', // 0, text
    'What colors do you want the letters to be?',  // 1, font color
    'Which shape would you like to use?', // 2, shape, ~choices
    'What color would you like your shape to be? (Type a color or a hexadecimal number)', // 3, shape color
];


function renderText(letters, bgColor) {
  const svgText = `<text x="150" y="140" text-anchor="middle" font-size="40px" fill="${bgColor}">
    ${letters} </text>`;
  fs.writeFileSync("logo.svg", svgText);
}


function init(){
    inquirer.prompt([
        {
            type: 'maxlength-input',
            message: questions[0],
            name: 'letters',
            maxLength: 3,
        },
        {
          message: questions[1],
          name: 'fontColor',
          validate: function (color) {
              if (isColorValid(color)) {
                  return true;
              }
              return 'Please enter a valid color (hexadecimal or color name).';
          },
        },
        {
            type: 'list',
            message: questions[2],
            name: 'shape',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            message: questions[3],
            name: 'shapeColor',
            validate: function (color) {
              if (isColorValid(color)) {
                  return true;
              }
              return 'Please enter a valid color (hexadecimal or color name).';
          },
        },
    ]).then(({ letters, fontColor, shape, shapeColor }) => {
      let chosenShape;
    
      if (shape === "circle") {
        chosenShape = new Circle();
      } else if (shape === "square") {
        chosenShape = new Square();
      } else if (shape === "triangle") {
        chosenShape = new Triangle();
      } else {
        throw new Error("Invalid shape type!");
      }
    
      chosenShape.setColor(shapeColor);
      chosenShape.setLetters(letters);
      chosenShape.setTextColor(fontColor); // Set the fontColor property on the Triangle object
    
      const svgString = chosenShape.render();
      renderText(letters, fontColor);
      fs.appendFileSync("logo.svg", svgString, (err) => {
        if (err) {
          console.error("Error writing SVG file:", err);
        } else {
          console.log("Generated logo.svg");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
  
init();