const commentRepository = require("../repositories/commentRepository");

exports.getComment = async (id) => {
  const comment = await commentRepository.findCommentById(id);
  return comment.toJSON();
};

exports.getAllComments = async () => {
  return await commentRepository.findAllComments();
};

exports.addComment = async (comment) => {
  if (!comment.content) {
    throw new Error("You must provide content to create a commentary");
  }
  await commentRepository.insertComment(comment);
};

exports.removeComment = async (id) => {
  if (!id) throw new Error("This ID has not exist");
  await commentRepository.deleteComment(id);
};
