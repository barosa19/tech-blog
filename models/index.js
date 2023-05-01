const sequelize = require("../config/connection");
const Comment = require("./comment");
const Post = require("./post");
const User = require("././user");

Post.belongsTo(User, {
    foreignKey: "user_id"
});
Comment.belongsTo(User, {
    foreignKey: "user_id"
})
Post.hasMany(Comment, {
    foreignKey: "post_id"
});

module.exports = {User, Post, Comment}