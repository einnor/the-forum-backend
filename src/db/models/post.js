const PostModel = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {},
  );
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    Post.belongsTo(models.Category, {
      foreignKey: 'categoryId',
    });
  };
  return Post;
};

export default PostModel;
