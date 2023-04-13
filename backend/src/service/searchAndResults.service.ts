import { ISearch, SearchSchema } from "../interfaces/ISearch.interface";

export default class SearchAndResultsService {
  private _searchAndResultsRepository: any;

  constructor(searchAndResultsService: any) {
    this._searchAndResultsRepository = searchAndResultsService
  }

  public create = async (search: ISearch) => {

    const parsed = SearchSchema.safeParse(search);

    if (!parsed.success) {
      return { code: 400, result: parsed.error };
    }
    const createdSearchRegister = await this._searchAndResultsRepository.create(search);

    return { code: 201, result: createdSearchRegister };
  }
}