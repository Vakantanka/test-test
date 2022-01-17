const sum = require('./preSchoolSum.js');

test('A művelet eredménye tíz alatti egész eredménynél a két szám összege.', () => {
  expect(preSchoolSum(4, 4)).toBe(8);
});