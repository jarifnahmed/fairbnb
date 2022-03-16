const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const storiesRouter = require('./stories.js');
const commentsRouter = require('./comments.js')
const bookingsRouter = require('./bookings.js')


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/stories', storiesRouter);

router.use('/comments', commentsRouter);

router.use('/bookings', bookingsRouter);

module.exports = router;
