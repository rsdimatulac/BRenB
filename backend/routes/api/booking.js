const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking, Listing, Image } = require("../../db/models");

const router = express.Router();

// GET /api/users/:id/bookings <--- Get the bookings by userID
// need to be authorized
router.get('/users/:id(\\d+)/bookings', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const bookings = await Booking.findAll({
        where: { user_id: userId },
        include: [
            {
                model: Listing,
                include: {
                    model: Image,
                    attributes: ["id", "url"],
                },
            },
        ],
        order: [
            ["check_in", "ASC"],
            [Listing, Image, "id", "ASC"]
        ]
    });
    return res.json(bookings);
}));

// POST /api/bookings <--- Create the booking
router.post('/bookings', asyncHandler(async (req, res) => {
    const { user_id, listing_id, check_in, check_out, num_guests, total_cost } = req.body;
    const newBooking = await Booking.create({
        user_id,
        listing_id,
        check_in,
        check_out,
        num_guests,
        total_cost
    });

    return res.json(newBooking);
}));

// DELETE /api/bookings/:id
router.delete('/bookings/:id(\\d+)', asyncHandler(async (req, res) => {
    const bookingId = parseInt(req.params.id, 10);
    const booking = await Booking.findByPk(bookingId);
    await booking.destroy();

    return res.json(bookingId);
}));

module.exports = router;