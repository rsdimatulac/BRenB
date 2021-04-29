const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Booking } = require("../../db/models")

const router = express.Router();

// GET /api/bookings <--- Get the booking page
// need to be authorized
// router.get('/bookings', asyncHandler(async (req, res) => {

// }));

// POST /api/bookings <--- Create the booking
router.post('/bookings', asyncHandler(async (req, res) => {
    const { user_id, listing_id, check_in, check_out, num_guests } = req.body;
    const newBooking = await Booking.create({
        user_id,
        listing_id, 
        check_in, 
        check_out, 
        num_guests
    });

    // return res.json(newBooking);
    return res.redirect("/"); // redirect to home after booking
}));

module.exports = router;