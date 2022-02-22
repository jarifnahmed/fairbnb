const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Listing, User, Review } = require('../../db/models');

const router = express.Router();

const validateReview = [
  check('body')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Review cannot be empty.'),
  handleValidationErrors,
];

//gets all reviews from the Reviews table
router.get(
  '/',
  asyncHandler(async function (req, res) {
    const reviews = await Review.findAll({
      include: [User, Listing],
    });
    return res.json(reviews);
  })
);

//inserts a review into the Reviews table
router.post(
  '/',
  requireAuth,
  asyncHandler(async function (req, res) {
    const newReview = await Review.create(req.body);
    const review = await Review.findByPk(newReview.id, {
      include: [User, Listing],
    });
    if (review) {
      return res.json(review);
    }
  })
);

//edits a review
router.put(
  '/:id',
  requireAuth,
  validateReview,
  asyncHandler(async function (req, res) {
    await Review.update(req.body, { where: { id: req.body.id } });
    const updatedReview = await Review.findByPk(req.body.id, {
      include: [User, Listing],
    });

    if (updatedReview) {
      return res.json(updatedReview);
    }
  })
);

//deletes a review
router.delete(
  '/delete/:id',
  requireAuth,
  asyncHandler(async function (req, res) {
    const reviewId = req.params.id;
    const deletedReview = await Review.destroy({ where: { id: reviewId } });
    if (deletedReview) {
      return res.json(reviewId);
    }
  })
);

module.exports = router;
