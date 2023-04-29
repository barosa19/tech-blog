const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    username: {
      references: {
        model: "user",
        key: "username",
      },
    },
  },
  {
    sequelize,
    modelName: "post",
    freezeTableName: true,
  }
);

module.exports = Post;
