const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const namedColors = [
    'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia',
    'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua',
];

function isColorValid(color) {
    return hexColorRegex.test(color) || namedColors.includes(color.toLowerCase());
}

module.exports.hexColorRegex = hexColorRegex;
module.exports.isColorValid = isColorValid;