const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes.js');
const { isColorValid } = require('./lib/validate.js');




const questions = [
    'Which letters do you want? (Max 3)', // 0, text
    'What background color would you like? (Type a color or a hexadecimal number)',  // 1, bg color
    'Which shape would you like to use?', // 2, shape, ~choices
    'What color would you like your shape to be? (Type a color or a hexadecimal number)', // 3, shape color
];


function init(){
    inquirer.prompt([
        {
            message: questions[0],
            name: 'letters',
        },
        {
          message: questions[1],
          name: 'bgColor',
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
    ]).then(({ letters, bgColor, shape, shapeColor }) => {
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
        chosenShape.setBgColor(bgColor);
        chosenShape.setLetters(letters);
  
        const svgString = chosenShape.render();
        fs.writeFile("logo.svg", svgString, (err) => {
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