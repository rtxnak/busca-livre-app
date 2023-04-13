import { Schema, model } from 'mongoose';

import { ISearch } from "../../interfaces/ISearch.interface";

const searchAndResultsSchema = new Schema<ISearch>({
  query: { type: String, required: true },
  webpage: { type: String, required: true },
  caetgory: { type: String, required: true },
  results: [
    {
      description: { type: String, required: true },
      img: { type: String, required: true },
      price: { type: String, required: true },
      link: { type: String, required: true },
    },
  ]
});

export const SearchAndResultsModel= model("SearchAndResults", searchAndResultsSchema);
