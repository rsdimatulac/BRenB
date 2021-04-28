const express = require('express');
const asyncHandler = require('express-async-handler');
const { Listing, User, Image } = require('../../db/models');

const router = express.Router();

// GET /api/listings/:id <<--- Get the listing by its ID
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const listingId = parseInt(req.params.id, 10);
    const listing = await Listing.findByPk(listingId, { include: [User, Image] });
    return res.json(listing);
}));

module.exports = router;