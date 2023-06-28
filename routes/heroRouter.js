const express = require('express');
const HeroesController = require('../controllers/Heroes.controller');
const {pagination} = require('../middleware/pagination.mw');
const {powerHandler} = require('../middleware/powerHandler.mw')
const upload = require('../utils/multer')
const heroRouter = express.Router();

heroRouter.post('/', upload.array('image', 5), powerHandler, HeroesController.createOne);
heroRouter.delete('/:heroId', HeroesController.deleteOne);
heroRouter.put('/:heroId', HeroesController.updateOne);
heroRouter.get('/', pagination, HeroesController.getAll);

module.exports = heroRouter;
