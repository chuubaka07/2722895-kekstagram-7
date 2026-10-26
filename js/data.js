import {
  NAMES,
  DESCRIPTIONS,
  MESSAGES,
  DESCRIPTIONS_COUNT,
} from './constants.js';

import {
  getRandomInteger,
  createUniqueRandomIntegerGenerator,
} from './util.js';


const generatePhotoId = createUniqueRandomIntegerGenerator(
  1,
  DESCRIPTIONS_COUNT
);

const generatePhotoNumber = createUniqueRandomIntegerGenerator(
  1,
  DESCRIPTIONS_COUNT
);

// Максимум 25 фотографий по 30 комментариев — 750 уникальных id.
const generateCommentId = createUniqueRandomIntegerGenerator(
  1,
  DESCRIPTIONS_COUNT * 30
);

const createComment = () => {
  let message = MESSAGES[getRandomInteger(0, MESSAGES.length - 1)];

  // Случайным образом добавляем второе сообщение.
  if (getRandomInteger(1, 2) === 2) {
    message = `${message} ${MESSAGES[getRandomInteger(0, MESSAGES.length - 1)]}`;
  }

  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: message,
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
};

const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  return Array.from({ length: commentsCount }, createComment);
};

const createDescription = () => {
  const pictureDescription = {
    id: generatePhotoId(),
    url: `photos/${generatePhotoNumber()}.jpg`,
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: createComments(),
  };

  return pictureDescription;
};

export const generatePhotos = () => {
  const photos = Array.from({ length: DESCRIPTIONS_COUNT }, createDescription);
  photos.sort((a, b) => a.id - b.id);
  return photos;
};
