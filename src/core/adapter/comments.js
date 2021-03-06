export const adaptCommentsToClient = (comment) => {
  const adaptedComment = Object.assign({}, comment, {
    user: Object.assign({}, comment.user, {
      avatarUrl: comment.user.avatar_url,
      isPro: comment.user.is_pro
    })
  });

  // Ненужные ключи удаляем
  delete adaptedComment.user.avatar_url;
  delete adaptedComment.user.is_pro;

  return adaptedComment;
};
