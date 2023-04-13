import { ISearch } from '../../interfaces/ISearch.interface';
import { SearchAndResultsModel } from '../models/SearchAndResults'

export default class SearchAndResultsRepository {
  public create = async (search: ISearch) => {
    const createdSearchRegister = await SearchAndResultsModel.create(search);
    return createdSearchRegister;
  }
}