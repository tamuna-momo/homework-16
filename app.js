// 3. 
let sentence ="MY NAME IS JOHN";
console.log(sentence.toLowerCase());

// 4.
 numArray=[1,2,3,4,5,6,7,8];
for (i=0;i<50;i++){
  console.log(i);
}
console.log(numArray.filter((even) => even%2===0));
// console.log(numArray.filter((odd)=> odd % 2 !==0));

// 1. ეს მეთოდიც ვნახე:
// const number=prompt('enter your number:');
// if(number % 2===0){
//   console.log('false');
// } else {
//   console.log('true');
// }

function getRandomInt(max){
  return Math.floor(Math.random ()*max);  
}

function even(number){
  if(number%2===0){
    return true;
  }else {
    return false;
  }
}
console.log(even(getRandomInt(60)));

