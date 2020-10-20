import React from 'react';
import moment from 'moment';

const Comment = (props) => {
  const {comment} = props;
  const date = moment(comment.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{comment.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: Math.round(comment.rating) * 20 + `%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.content}</p>
        <time className="reviews__time" dateTime="2019-04-24">{date.format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

export default Comment;
