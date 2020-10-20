import React from 'react';
import PropTypes from 'prop-types';

import Comment from "../comment/comment";
import CommentProp from '../comment/comment.prop';

const CommentsList = (props) => {
  const {comments} = props;
  return (
    <ul className="reviews__list">{comments.map((comment) => <Comment comment={comment} key={comment.id} />)}</ul>
  );
};

export default CommentsList;

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(CommentProp)
};
