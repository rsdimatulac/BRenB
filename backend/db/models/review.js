'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    listing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Listings' }
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'user_id' });
    Review.belongsTo(models.Listing, { foreignKey: 'listing_id' });
  };
  return Review;
};