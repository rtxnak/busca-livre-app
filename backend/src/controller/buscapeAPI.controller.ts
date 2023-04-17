import { NextFunction, Request, Response } from 'express';

export default class BuscapeAPIController {
  private _buscapeAPIService: any;

  constructor(buscapeAPIService: any) {
    this._buscapeAPIService = buscapeAPIService;
  }

  async getProductsFromCategoryAndQuery(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const { query, categoryId } = body;
      const newSearch = await this._buscapeAPIService.buscapeWebScrappingSearch(query, categoryId);
      return res.status(newSearch.code).json(newSearch.result)
    } catch (err) {
      next(err);
    }
  }
}
