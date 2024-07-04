import {getRandomInteger} from './util.js';

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
const keksId = [25];

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

const idPhoto = getRandomIntegerUnigueID();
const idImg = getRandomIntegerUnigueID(0, 25);
const idcommrnts = getRandomIntegerUnigueID();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)]

const createcomments = () =>({
  likes: getRandomInteger(15,200),
  id: idcommrnts(),
  descriptions: getRandomArrayElement(name),
});

const createObject = () => ({
  id: idPhoto(),
  url: `photos/${idImg()}.png`,
  likes: getRandomInteger(15,200),
  descriptions: getRandomArrayElement(message),
  comments: Array.from({ length: 30 }, createcomments),
});
export const createObjects = Array.from({ length: keksId }, createObject);


