const testEqual = require('./myTestLib.js');
const preSchoolSum = require('./preSchoolSum.js');

testEqual(7, preSchoolSum(3, 4), "A művelet eredménye tíz alatti egész eredménynél a két szám összege.");
testEqual(0, preSchoolSum(-14, 4), "A művelet eredménye 0 alatti egész eredménynél 0-t ad vissza.");
testEqual('sok', preSchoolSum(3, 14), "A művelet eredménye tíz feletti eredménynél a 'sok' szöveget adja vissza.");