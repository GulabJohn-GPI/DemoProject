const index = require('../index');


test('Below mark of 35 should get fail', ()=> {
   const result =  index.greadeSystem(30.45);

   expect(result).toMatch('Fail');   
   expect(result).not.toMatch('Pass');
});

test('Above mark of 35 should get pass', ()=> {
    const result =  index.greadeSystem(40);
 
    expect(result).toMatch('Pass');
    expect(result).not.toMatch('Fail');
 });

 test('Without any value should return Not Valid', ()=> {
    const result =  index.greadeSystem();
 
    expect(result).toBe('Not Valid!');
    expect(result).not.toMatch('Pass');
    expect(result).not.toMatch('Fail');
 });

 test('String value should return Not Valid', ()=> {
    const result =  index.greadeSystem('Hello');
 
    expect(result).toBe('Not Valid!');
    expect(result).not.toMatch('Pass');
    expect(result).not.toMatch('Fail');
 });