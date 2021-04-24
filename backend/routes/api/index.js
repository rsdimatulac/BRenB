const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter); // /api/session

router.use('/users', usersRouter); // /api/users

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