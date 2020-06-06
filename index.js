const {primelength} = require('prime-num');
const {primeupto} = require('primeupto');
console.log(primeupto(5));   // 2,3,5
console.log(primelength(5));   // 3
console.log(primeupto(34));  // 2,3,5,7,11,13,17,19,23,29,31
console.log(primelength(34));  // 11
console.log(primeupto(25));  // 2,3,5,7,11,13,17,19,23
console.log(primelength(25));  // 9
console.log(primeupto(53));  // 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53
console.log(primelength(53));  // 16
 