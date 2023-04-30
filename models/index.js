const sequelize = require("../config/connection");
const Comment = require("./comment");
const Post = require("./post");
const User = require("././user");

Post.belongsTo(User, {});
User.hasMany(Post, {});
User.hasMany(Comment, {})
Comment.belongsTo(Post, {});
Comment.belongsTo(User, {})
Post.hasMany(Comment, {});
