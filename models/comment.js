const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "user",
        key: "username",
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "post",
          key: "id"
        }
      }
    },
  },
  {
    sequelize,
    modelName: "comment",
    freezeTableName: true,
  }
);

module.exports = Post;
