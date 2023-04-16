import { MercadoLivreCategoriesIds, buscapeCategoriesIds } from "@/helpers/categories";
import { buscapeGetProductsFromCategoryAndQuery } from "@/services/buscapeAPI";
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
  productsFound: [],
  webAndCategoryOnSearch: { webpage: string, category: string }
  handleClickSearchButton: () => void
}

export const Context = createContext<contextType>({} as contextType);

export const ContextProvider = ({ children }: contextProps) => {

  const [webPageSelection, setWebPageSelection] = useState<string>('Todas');
  const [categorySelection, setCategorySelection] = useState<string>('');
  const [queryInput, setQueryInput] = useState<string>('');
  const [productsFound, setProductsFound] = useState<[]>([])
  const [webAndCategoryOnSearch, setWebAndCategoryOnSearch] = useState<{ webpage: string, category: string }>({ webpage: '', category: '' })

  const mercadoLivreResultsParse = async () => {
    const categoriesArray = Object.entries(MercadoLivreCategoriesIds)
    const categoryFiltered = categoriesArray.filter((key) => key[0] === categorySelection);
    const categoryId = categoryFiltered.length === 1 ? categoryFiltered[0][1] : ""

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

  const buscapeResultsParse = async () => {
    const categoriesArray = Object.entries(buscapeCategoriesIds)
    const categoryFiltered = categoriesArray.filter((key) => key[0] === categorySelection);
    const categoryId = categoryFiltered.length === 1 ? categoryFiltered[0][1] : "";
    const results = await buscapeGetProductsFromCategoryAndQuery(queryInput as string, categoryId as string);
    return results;
  }

  const handleClickSearchButton = async () => {
    if (webPageSelection === "MercadoLivre") {
      setWebAndCategoryOnSearch({ webpage: webPageSelection, category: categorySelection })
      const products = await mercadoLivreResultsParse();
      setProductsFound(products)
    }
    if (webPageSelection === "Buscapé") {
      console.log('loading...')
      setWebAndCategoryOnSearch({ webpage: webPageSelection, category: categorySelection })
      const products = await buscapeResultsParse();
      setProductsFound(products)
      console.log('finish')
    }
  }

  return (
    <Context.Provider
      value={{
        webPageSelection,
        setWebPageSelection,
        categorySelection,
        setCategorySelection,
        queryInput,
        setQueryInput,
        productsFound,
        webAndCategoryOnSearch,
        handleClickSearchButton
      }}
    >
      {children}
    </Context.Provider>
  )


}
