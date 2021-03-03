const add = require('./add')

test('Sum of 0 and 0 is 0',()=>{
    expect(add(0,0)).toEqual(0)
})