const router = require('express').Router();
const controller = require('./controller.js');

router.route('/')
  .post(controller.saveBird)
  .get(controller.getBirds)
  .delete(controller.deleteBird)
  // .delete(controller.deleteBird)
  // .put(controller.updateBird)

router.route('/data/')
  .get(controller.getBirdData)
  .post(controller.getBirdData)

module.exports = router