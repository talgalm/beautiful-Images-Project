const express = require('express');
const router = express.Router();

const AdminController = require('../Controllers/adminController');

// Define routes for admin
router.post('/login', AdminController.adminLogin);
router.post('/allRatings', AdminController.allRatings);
router.post('/RatingsPaginated', AdminController.allRatingsPaginated);
router.post('/userRatings', AdminController.userRatings);
router.post('/imageRatings', AdminController.imageRatings);
router.post('/images', AdminController.getAllImages);
router.post('/imagesPaginated', AdminController.getAllImagesPaginated);
router.post('/generatePdf', AdminController.generateAndFetchPdfReport);
router.post('/generateCsvRatings', AdminController.generateAndFetchCsvRatings);
router.post('/generateCsvImages', AdminController.generateAndFetchCsvImages);
router.post('/generateCsvUsers', AdminController.generateAndFetchCsvUsers);
router.post('/generateCsvCategories', AdminController.generateAndFetchCsvCategories);
router.post('/participantsData',AdminController.participantsData);
router.post('/createImage',AdminController.createImage);
router.post('/deleteImage',AdminController.deleteImage);
router.post('/updateImage',AdminController.updateImage);

module.exports = router;
