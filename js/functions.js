const mystr = 'Моя строка текста';
const len = mystr.length;
console.log(len);

if (mystr.length <= 20) {
  console.log('строка короче 20 символов');
} else {
  console.log('строка длиннее 20 символов');
}


const myStr = 'Втораястрокатекста';
const Len = myStr.length;
console.log(Len);

if (myStr != 18) {
  console.log('Строка ровно 18 символов');
} else {
  console.log('Строка меньше или больше 18 символов');
}


const myString = 'Третья строка текста';
const myLen = myString.length;
console.log(myLen);

if (myString <= 10) {
  console.log('Строка длиннее 10 символов');
} else {
  console.log('Строка короче 10 символов');
}

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
