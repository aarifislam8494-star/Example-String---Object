const senctence = 'I am learning web Dev.';
// const Result = 'veD bew gninriael ma I';

// let reverse = ''
// for (const letter of senctence){
//  console.log(latter);
//  reverse = letter + reverse;
// }
// console.log(reverse);



// for loop
// ignore this solution
// for( let i = 0; i < senctence.length; i++){
//  console.log(i);
//  console.log(senctence[i]);
//  const letter = senctence[i];
//  rev = letter + rev;
// }
// console.log(rev);

// shortcut
const reversed = senctence.split('').reverse().join('');
console.log(reversed);
