const head = require('./head') 

test ('Should return the first element',() => {

    expect(head([1,2,3])).toEqual(1)
})