const express = require('express');
const asyncHandler = require('express-async-handler');
const { Listing } = require('../../db/models');

const router = express.Router();

// // GET /api/search
router.get('/search', asyncHandler(async (req, res) => {
    // const { startDate, endDate } = req.body;
    // const listings = await Listing.findAll({
    //  startDate, endDate
    // });
    const listings = await Listing.findAll();
}));

module.exports = router;