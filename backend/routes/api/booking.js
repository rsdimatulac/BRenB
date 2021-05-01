const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Booking, Listing, Image, Review } = require("../../db/models")

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
                    attributes: ["id", "url"]
                },
            },
        ],
        order: [
            ["check_in", "ASC"]
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

module.exports = router;