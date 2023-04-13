import { Router } from 'express';

import SearchAndResultsController from '../controller/searchAndResults.controller';
import SearchAndResultsService from '../service/searchAndResults.service';
import SearchAndResultsRepository from '../database/repository/searchAndResults.repository';

const searchAndResultsRepository = new SearchAndResultsRepository();
const searchAndResultsService = new SearchAndResultsService(searchAndResultsRepository);
const searchAndResultsController = new SearchAndResultsController(searchAndResultsService);

const searchAndResultsRouter = Router();

searchAndResultsRouter.post('/', (req, res, next) => {
  searchAndResultsController.saveNewSearch(req, res, next);
});

searchAndResultsRouter.post('/search', (req, res, next) => {
  searchAndResultsController.findSearch(req, res, next);
});

export default searchAndResultsRouter;