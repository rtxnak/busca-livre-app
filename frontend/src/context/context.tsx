import { MercadoLivreCategoriesIds } from "@/helpers/categories";
import { mercadoLivreGetProductsFromCategoryAndQuery } from "@/services/mercadoLivreAPI";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type contextProps = {
  children: ReactNode;
}

type contextType = {
  webPageSelection: string,
  setWebPageSelection: Dispatch<SetStateAction<string>>,
  categorySelection: string,
  setCategorySelection: Dispatch<SetStateAction<string>>,
  queryInput: string,
  setQueryInput: Dispatch<SetStateAction<string>>,
}

export const Context = createContext<contextType>({} as contextType);

export const ContextProvider = ({ children }: contextProps) => {

  const [webPageSelection, setWebPageSelection] = useState<string>('Todas');
  const [categorySelection, setCategorySelection] = useState<string>('');
  const [queryInput, setQueryInput] = useState<string>('');

  const mercadoLivreResultsParse = async () => {
    const categoriesArray = Object.entries(MercadoLivreCategoriesIds)
    const categoryFiltered = categoriesArray.filter((key) => key[0] === categorySelection);
    const categoryId = categoryFiltered.length > 1 ? categoryFiltered[0][1] : ""

    const { results } = await mercadoLivreGetProductsFromCategoryAndQuery(categoryId, queryInput);
    const mercadoLivreParsedData = results.map((result: any) => {
      return (
        {
          description: result.title,
          img: result.thumbnail,
          price: (result.price).toString(),
          link: result.permalink
        }
      )
    })
    return mercadoLivreParsedData;
  }

  return (
    <Context.Provider
      value={{
        webPageSelection,
        setWebPageSelection,
        categorySelection,
        setCategorySelection,
        queryInput,
        setQueryInput
      }}
    >
      {children}
    </Context.Provider>
  )


}
