// function fn (str, num) {
//   if (str.length <= num) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(fn('моя первая строка', 20));
// console.log(fn('втораястрокатекста', 18));
// console.log(fn('Третья строка текста', 10));
// const checkPalindrome = (string) => {
//   const normalString = string.replaceAll(' ', '').toLowerCase();
//   let reversedString = '';
//   for (let i = normalString.length - 1; i >= 0; i--) {
//     reversedString += normalString[i];
//   }
//   return normalString === reversedString;
// }
// console.log(checkPalindrome('noon'));
// console.log(checkPalindrome('ДовОд'));
// console.log(checkPalindrome('Кекс'));
// console.log(checkPalindrome('Лёша на полке клопа нашёл '));

const getRandomInteger = (a, b) => {

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomIntegerUnigueID = (a = 0,b = 1000)=>{
  const IntegerUnigueID = [];
  return function (){
    let randomId = 0;
    do {
      randomId = getRandomInteger(a,b);
    } while (IntegerUnigueID.includes(randomId));
    IntegerUnigueID.push(randomId);
    return randomId;
  };
};

export {getRandomInteger, getRandomIntegerUnigueID};
