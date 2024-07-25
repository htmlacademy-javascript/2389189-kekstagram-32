import { indefications } from './const.js';

const commentsList = document.querySelector('.social__comments');

const renderCommentsList = (comments) => {
  document.querySelector('.social__comments').textContent = '';
  comments.forEach((comment) => {
    const newCommentContainer = document.createElement('li');
    const userAvatar = document.createElement('img');
    const textComment = document.createElement('p');

    newCommentContainer.className = 'social__comment';
    userAvatar.className = 'social__picture';
    textComment.className = 'social__text';

    userAvatar.src = comment.avatar;
    userAvatar.alt = comment.name;
    userAvatar.width = indefications.USERAVATARWIDTH;
    userAvatar.height = indefications.USERAVATARHEIGTH;
    textComment.textContent = comment.message;

    newCommentContainer.appendChild(userAvatar);
    newCommentContainer.appendChild(textComment);
    commentsList.appendChild(newCommentContainer);
  });
};

export { renderCommentsList };
