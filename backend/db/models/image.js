'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    listing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Listings' }
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Listing, { foreignKey: 'listing_id' });
  };
  return Image;
};