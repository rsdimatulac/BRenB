const express = require('express');
const asyncHandler = require('express-async-handler');
const { Listing, Image, User } = require('../../db/models');

const router = express.Router();

// // GET /api/search
router.get('/', asyncHandler(async (req, res) => {
    // const { startDate, endDate } = req.body;
    // const listings = await Listing.findAll({
    //  startDate, endDate
    // });
    const listings = await Listing.findAll(
        { 
            include: [Image, User],
            order: [[Image, "id", "ASC"]]
        });
    return res.json(listings);
}));

module.exports = router;