const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listings.js');
const searchRouter = require('./search.js');
const bookingRouter = require('./booking.js');
const reviewsRouter = require('./review.js');

router.use('/session', sessionRouter); // /api/session

router.use('/users', usersRouter); // /api/users

router.use('/listings', listingsRouter); // /api/listings

router.use('/search', searchRouter); // /api/search

router.use(bookingRouter); // /api/bookings

router.use(reviewsRouter); // /api/listings/:id/reviews

router.post('/test', function(req,res) {  // /api/test
    res.json({ requestBody: req.body });
});

module.exports = router;

/////////////// TESTING USER AUTH MIDDLEWARE. Delete later.  ///////////////

// const { User } = require('../../db/models');
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );