const {Triangle} = require ('./shapes.js');
test ('Triangle renders correctly', () => {
    //sets the test values
    const shape = new Triangle();
    shape.setColor("blue");
    //tests expected render vs actual render
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});