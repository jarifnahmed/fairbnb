const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Booking, Listing, User } = require('../../db/models');

const router = express.Router();

// const validateBooking = [
//   check('body')
//     .exists({ checkFalsy: true })
//     .isLength({ min: 1 })
//     .withMessage('Please provide content for review.'),
//   handleValidationErrors,
// ];

//gets all bookings from the Bookings table
router.get(
  '/',
  asyncHandler(async function (req, res) {
    const bookings = await Booking.findAll({
      include: [User, Listing],
    });
    return res.json(bookings);
  })
);

//inserts a booking into the Bookings table
router.post(
  '/',
  requireAuth,
  asyncHandler(async function (req, res) {
    const newBooking = await Booking.create(req.body);
    const booking = await Booking.findByPk(newBooking.id, {
      include: [User, Listing],
    });
    if (booking) {
      return res.json(booking);
    }
  })
);

//edits a booking
router.put(
  '/:id',
  requireAuth,
  asyncHandler(async function (req, res) {
    await Booking.update(req.body, { where: { id: req.body.id } });
    const updatedBooking = await Booking.findByPk(req.body.id, {
      include: [User, Listing],
    });

    if (updatedBooking) {
      return res.json(updatedBooking);
    }
  })
);

//deletes a booking
router.delete(
  '/delete/:id',
  requireAuth,
  asyncHandler(async function (req, res) {
    const bookingId = req.params.id;
    const deletedBooking = await Booking.destroy({ where: { id: bookingId } });
    if (deletedBooking) {
      return res.json(bookingId);
    }
  })
);

module.exports = router;
