import React from 'react';
import Comment from "../comment/comment";

const CommentsList = (props) => {
  const {comments} = props;
  return (
    <ul className="reviews__list">{comments.map((comment) => <Comment comment={comment} key={comment.id} />)}</ul>
  );
};

export default CommentsList;
