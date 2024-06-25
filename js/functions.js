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
