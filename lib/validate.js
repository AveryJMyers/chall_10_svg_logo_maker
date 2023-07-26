
// creates a regex of all the possible hex colors
const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
// generated list of possible colors, could be expanded on
const namedColors = [
    'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia',
    'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua',
];
// Tests that the user input matches the regex or is a named color
function isColorValid(color) {
    return hexColorRegex.test(color) || namedColors.includes(color.toLowerCase());
}

module.exports.hexColorRegex = hexColorRegex;
module.exports.isColorValid = isColorValid;