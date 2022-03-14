const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Story, User } = require('../../db/models');
const {
  singleMulterUpload,
  singlePublicFileUpload,
  multipleMulterUpload,
  multiplePublicFileUpload,
} = require('../../awsS3.js');

const router = express.Router();

const validateStory = [
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

//gets all stories from the Stories table
router.get(
  '/',
  asyncHandler(async function (req, res) {
    const stories = await Story.findAll({
      include: User,
    });
    return res.json(stories);
  })
);

//inserts a story into the Stories table
router.post(
  '/',
  requireAuth,
  multipleMulterUpload("images"),
  validateStory,
  asyncHandler(async function (req, res) {
    const { authorId, title, propertyType, city, lat, lng, price, body } = req.body;
    const imageUrl = await multiplePublicFileUpload(req.files);
    const newStory = await Story.create({
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
    const story = await Story.findByPk(newStory.id, {
      include: User,
    });
    if (story) {
      return res.json(story);
    }
  })
);

//edits a story
router.put(
  '/:id',
  requireAuth,
  multipleMulterUpload('imageUrl'),
  validateStory,
  asyncHandler(async function (req, res) {
    let { id, authorId, title, propertyType, city, lat, lng, price, body, imageUrl } = req.body;

    if (req.files) {
      imageUrl = await multiplePublicFileUpload(req.files);
    }

    const editedStory = {
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

    await Story.update(editedStory, { where: { id: id } });
    const updatedStory = await Story.findByPk(id, {
      include: User,
    });

    if (updatedStory) {
      return res.json(updatedStory);
    }
  })
);

//deletes a story
router.delete(
  '/delete/:id',
  requireAuth,
  asyncHandler(async function (req, res) {
    const storyId = req.params.id;
    const deletedStory = await Story.destroy({ where: { id: storyId } });
    if (deletedStory) {
      return res.json(storyId);
    }
  })
);

module.exports = router;
