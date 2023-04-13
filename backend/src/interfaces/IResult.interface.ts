import { z } from 'zod';

const ResultSchema = z.object({
  results: z.array(z.object(
    {
      description: z.string(),
      img: z.string(),
      price: z.string(),
      link: z.string(),
    }
  ))
});

export type IResult = z.infer<typeof ResultSchema>;
export { ResultSchema };
