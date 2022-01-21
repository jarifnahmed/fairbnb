const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listing');
const reviewsRouter = require('./review');
const imagesRouter = require('./image');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/listings', listingsRouter);
router.use('/reviews', reviewsRouter);
router.use('/images', imagesRouter);

//POST test route
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
