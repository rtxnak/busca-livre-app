import { Router } from 'express';

import BuscapeAPIController from '../controller/buscapeAPI.controller';
import BuscapeAPIService from '../service/buscapeAPI.service';

const buscapeAPIService = new BuscapeAPIService();
const buscapeAPIController = new BuscapeAPIController(buscapeAPIService);

const buscapeAPIRouter = Router();

buscapeAPIRouter.post('/', (req, res, next) => {
  buscapeAPIController.getProductsFromCategoryAndQuery(req, res, next);
});

export default buscapeAPIRouter;
