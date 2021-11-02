// 3. 
let sentence ="MY NAME IS JOHN";
console.log(sentence.toLowerCase());

// 4.
 numArray=[1,2,3,4,5,6,7,8];

  console.log(i);

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

// 2.
function  getCurrencySymbolFromCode(currency){
if(currency=='USD'){
  return '$';
} else if (currency== 'EUR'){
  return '€';
}else if (currency=='GEL'){
  return 'ლ';
}
}
console.log(getCurrencySymbolFromCode('USD'));

// 5.
// const petsFavToy = (name, favToy) =>` ${name}'s favourite toy is a ${favToy}`
// const cat= petsFavToy('kote', 'bird');

// console.log(cat);
const objectArray=[{name:'gio'}, {name:'natia'},{name:'milana'}]
console.log(getUserByName(objectArray,'natia'));


