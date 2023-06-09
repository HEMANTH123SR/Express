const express = require('express');
const tourController = require('./../controller/tourController');
// const { router } = require('../app');
const Router = express.Router();



Router.route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

Router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = Router;
