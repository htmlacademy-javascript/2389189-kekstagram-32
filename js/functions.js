function fn (str, num) {
  if (str.length <= num) {
    return true;
  } else {
    return false;
  }
}

console.log(fn('моя первая строка', 20));
console.log(fn('втораястрокатекста', 18));
console.log(fn('Третья строка текста', 10));

const checkPalindrome = (string) => {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = normalString.length - 1; i >= 0; i--) {
    reversedString += normalString[i];
  }
  return normalString === reversedString;
}

console.log(checkPalindrome('noon'));
console.log(checkPalindrome('ДовОд'));
console.log(checkPalindrome('Кекс'));
console.log(checkPalindrome('Лёша на полке клопа нашёл '));


// console.log(String(85));

// function createIdGenerator () {
//   let lastGeneratedId = 0;

//   return function () {
//     lastGeneratedId += 1;
//     return lastGeneratedId;
//   };
// }

// const generatePhotoId = createIdGenerator();

// console.log(generatePhotoId());
// console.log(generatePhotoId());
// console.log(generatePhotoId());

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, 3);

console.log(generatePhotoId());
console.log(generatePhotoId());
console.log(generatePhotoId());
