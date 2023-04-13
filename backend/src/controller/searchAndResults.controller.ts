import { NextFunction, Request, Response } from 'express';

export default class SearchAndResultsController {
  private _searchAndResultsService: any;

  constructor(searchAndResultsService: any) {
    this._searchAndResultsService = searchAndResultsService;
  }

  async saveNewSearch(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const newSearch = await this._searchAndResultsService.create(body);
      return res.status(newSearch.code).json(newSearch.result)
    } catch (err) {
      next(err);
    }
  }
}