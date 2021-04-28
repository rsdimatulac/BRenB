'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    host_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    price: { 
      type: DataTypes.FLOAT,
      allowNull: false
    },
    num_guests: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    num_beds: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    num_baths: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    rating: {
      type: DataTypes.NUMERIC(3, 2),
      allowNull: false
    },
  }, {});
  Listing.associate = function(models) {
    Listing.belongsTo(models.User, { foreignKey: 'host_id' });
    Listing.hasMany(models.Booking, { foreignKey: 'listing_id' });
    Listing.hasMany(models.Review, { foreignKey: 'listing_id' });
    Listing.hasMany(models.Image, { foreignKey: 'listing_id' });
  };
  return Listing;
};