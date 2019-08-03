const router = require('express').Router();
const controller = require('./controller.js');

router.route('/')
  .post(controller.saveBird)
  .get(controller.getBirds)
  .delete(controller.deleteBird)
  .put(controller.editBird)

router.route('/data/')
  .get(controller.getBirdData)
  .post(controller.getBirdData)

router.route('/api/')
  .get(controller.getApiKey)

module.exports = router