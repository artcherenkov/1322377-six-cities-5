import React from 'react';
import moment from 'moment';

import CommentProp from '../comment/comment.prop';

const Comment = ({comment}) => {
  const {user} = comment;
  const date = moment(comment.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: Math.round(comment.rating) * 20 + `%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime={date.format(`yyyy-MM-DD`)}>{date.format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

Comment.propTypes = {
  comment: CommentProp
};


export default Comment;
