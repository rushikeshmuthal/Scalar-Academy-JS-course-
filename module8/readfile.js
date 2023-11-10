const fs = require('fs')
console.log('this is line 1');

//reading file1
const data1 = fs.readFileSync('./file1.txt',
    { encoding: 'utf8', flag: 'r' });
console.log(data1);

//reading file2
const data2 = fs.readFileSync('./file2.txt',
    { encoding: 'utf8', flag: 'r' });

console.log(data2);
console.log('this is last line');
