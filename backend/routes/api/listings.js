const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Listing, User } = require('../../db/models');

const router = express.Router();

const validateListing = [
  // check('header')
  //   .exists({ checkFalsy: true })
  //   .isLength({ min: 1 })
  //   .withMessage('Title cannot be blank.'),
  // check('subtitle')
  //   .exists({ checkFalsy: true })
  //   .isLength({ min: 1 })
  //   .withMessage('Description cannot be blank.'),
  // check('body')
  //   .exists({ checkFalsy: true })
  //   .isLength({ min: 1 })
  //   .withMessage('Body cannot be blank.'),
  check('imageUrl')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Needs a valid image URL.'),
  handleValidationErrors,
];

//gets all listings from the Listings table
router.get(
  '/',
  asyncHandler(async function (req, res) {
    const listings = await Listing.findAll({
      include: User,
    });
    return res.json(listings);
  })
);

//inserts a listing into the Listings table
// router.post('/', requireAuth, validateListing, asyncHandler(async function(req, res) {
router.post(
  '/',
  requireAuth,
  validateListing,
  asyncHandler(async function (req, res) {
    const newListing = await Listing.create(req.body);
    const listing = await Listing.findByPk(newListing.id, {
      include: User,
    });
    if (listing) {
      return res.json(listing);
    }
  })
);

//edits a listing
// router.put('/:id', requireAuth, validateListing, asyncHandler(async function(req, res) {
router.put(
  '/:id',
  requireAuth,
  validateListing,
  asyncHandler(async function (req, res) {
    await Listing.update(req.body, { where: { id: req.body.id } });
    const updatedListing = await Listing.findByPk(req.body.id, {
      include: User,
    });

    if (updatedListing) {
      return res.json(updatedListing);
    }
  })
);

//deletes a listing
router.delete(
  '/delete/:id',
  requireAuth,
  asyncHandler(async function (req, res) {
    const listingId = req.params.id;
    const deletedListing = await Listing.destroy({ where: { id: listingId } });
    if (deletedListing) {
      return res.json(listingId);
    }
  })
);

module.exports = router;
