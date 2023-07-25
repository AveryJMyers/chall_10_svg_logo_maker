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


function init(){
    inquirer
    .prompt([
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
    ]).then((answers) => {
        const { letters, fontColor, shape, shapeColor } = answers;

        let chosenShape;
        switch (shape) {
            case 'circle':
                chosenShape = new Circle(shapeColor);
                break;
            case 'square':
                chosenShape = new Square(shapeColor);
                break;
            case 'triangle':
                chosenShape = new Triangle(shapeColor);
                break;
            default:
                console.log('Something went wrong.');
                return;
        }

        chosenShape.setColor(shapeColor);

        const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${chosenShape.render()}
        <text x="138" y="130" fill="${fontColor}">${letters}</text>
      </svg>`;

      fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
      });
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}


// Call the init function to start the interaction with the user and generate the logo
init();





