const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Review } = require('../../db/models');

const router = express.Router();

// GET /api/listings/:id/reviews
router.get('/listings/:id(\\d+)/reviews', asyncHandler(async (req, res) => {
    const listingId = parseInt(req.params.id, 10);
    const reviews = await Review.findAll({
        where: { listing_id: listingId },
        include: [User],
        order: ["id"]
    });
    return res.json(reviews);
}));

// POST /api/listings/:id/reviews
router.post('/listings/:id(\\d+)/reviews', asyncHandler(async (req, res) => {
    // Add logic to post new reviews
}));


module.exports = router;