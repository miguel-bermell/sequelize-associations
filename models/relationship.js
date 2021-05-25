const dbConnection = require("../config/db");
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

const loadModels = () => {
  User.hasMany(Post, {
    foreignKey: {
      allowNull: false,
    },
  });
  Post.belongsTo(User);
  Post.hasMany(Comment, {
    foreignKey: {
      allowNull: false,
    },
  });
  Comment.belongsTo(User);
  Comment.belongsTo(Post);
  dbConnection.sync().then(() => console.log("All models loaded"));
};

module.exports = loadModels;
