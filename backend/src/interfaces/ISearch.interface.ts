import { z } from 'zod';
import { ResultSchema } from './IResult.interface'

const SearchSchema = ResultSchema.extend({
  query: z.string(),
  webpage: z.string(),
  category: z.string(),
});

export type ISearch = z.infer<typeof SearchSchema>;
export { SearchSchema };
