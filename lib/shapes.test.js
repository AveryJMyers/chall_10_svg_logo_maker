const {Triangle, Circle, Square} = require ('./shapes.js');

test ('Triangle is a subclass of Shape', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});   