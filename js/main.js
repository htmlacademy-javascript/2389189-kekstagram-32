const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const name = [
  'Артем',
  'Наталья',
  'Илья',
  'Сергей',
  'Алина',
  'Алексей',
  'Александр',
  'Екатерина'
];
const avatar = [6];
const keksId = [25];
const comments = ['закат', 'дерево', 'город', 'интерьер', 'картина']

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const likesNumber = getRandomInteger(15, 200);

const createWizard = () => ({
  id: getRandomArrayElement(keksId),
  url: 'photos/' + getRandomArrayElement(keksId) + '.png',
  likes: getRandomArrayElement(likesNumber),
  comments: 'описание ' + getRandomArrayElement(comments),
  avatar: 'img/avatar-' + getRandomArrayElement(avatar) + '.svg',
  message: getRandomArrayElement(message),
  name: getRandomArrayElement(name),
});
const similarWizards = Array.from({ length: keksId }, createWizard);
console.log(similarWizards);


// {
//   id: 135,
//   avatar: 'img/avatar-6.svg',
//   message: 'В целом всё неплохо. Но не всё.',
//   name: 'Артём',
// }

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// description, строка — описание фотографии. Описание придумайте самостоятельно.
