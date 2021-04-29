'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
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
    check_in: {
      type: DataTypes.DATE,
      allowNull: false
    },
    check_out: {
      type: DataTypes.DATE,
      allowNull: false
    },
    num_guests: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_cost: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, { foreignKey: 'user_id' });
    Booking.belongsTo(models.Listing, { foreignKey: 'listing_id' });
  };
  return Booking;
};