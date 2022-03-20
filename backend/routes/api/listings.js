const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Listing, User } = require('../../db/models');
const {
  singleMulterUpload,
  singlePublicFileUpload,
  multipleMulterUpload,
  multiplePublicFileUpload,
} = require('../../awsS3.js');

const router = express.Router();

const validateListing = [
  check('title')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Add a title.'),
  check('propertyType')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Add a property type.'),
  check('city')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Add a city.'),
  check('price')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Add a price.'),
  check('body')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Add a description.'),
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
router.post(
  '/',
  requireAuth,
  multipleMulterUpload('images'),
  validateListing,
  asyncHandler(async function (req, res) {
    const { authorId, title, propertyType, city, lat, lng, price, body } =
      req.body;
    const imageUrl = await multiplePublicFileUpload(req.files);
    const newListing = await Listing.create({
      authorId,
      title,
      propertyType,
      city,
      lat,
      lng,
      price,
      body,
      imageUrl,
    });
    const listing = await Listing.findByPk(newListing.id, {
      include: User,
    });
    if (listing) {
      return res.json(listing);
    }
  })
);

//edits a listing
router.put(
  '/:id',
  requireAuth,
  multipleMulterUpload('imageUrl'),
  validateListing,
  asyncHandler(async function (req, res) {
    let {
      id,
      authorId,
      title,
      propertyType,
      city,
      lat,
      lng,
      price,
      body,
      imageUrl,
    } = req.body;

    if (req.files) {
      imageUrl = await multiplePublicFileUpload(req.files);
    }

    const editedListing = {
      authorId,
      title,
      propertyType,
      city,
      lat,
      lng,
      price,
      body,
      imageUrl,
    };

    await Listing.update(editedListing, { where: { id: id } });
    const updatedListing = await Listing.findByPk(id, {
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
