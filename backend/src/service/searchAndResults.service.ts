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

  public findOne = async (search: Omit<ISearch, "results">) => {

    const foundSearch = await this._searchAndResultsRepository.findOne(search);

    if (!foundSearch) {
      return { code: 404, result: { message: "Item not found" } };
    }

    return { code: 200, result: foundSearch };
  }
}