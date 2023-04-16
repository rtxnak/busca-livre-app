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
  handleClickSearchButton: () => void,
  onLoading: boolean
}

export const Context = createContext<contextType>({} as contextType);

export const ContextProvider = ({ children }: contextProps) => {

  const [webPageSelection, setWebPageSelection] = useState<string>('Todas');
  const [categorySelection, setCategorySelection] = useState<string>('');
  const [queryInput, setQueryInput] = useState<string>('');
  const [productsFound, setProductsFound] = useState<[]>([])
  const [onLoading, setOnLoading] = useState<boolean>(false)

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
          price: (result.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }),
          link: result.permalink,
          category: categorySelection || 'sem categoria',
          webpage: 'MercadoLivre',
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
    return results.map((result: {}) => {
      return ({
        ...result,
        category: categorySelection || 'sem categoria',
        webpage: 'Buscapé',
      })
    });
  }

  const handleClickSearchButton = async () => {
    if (webPageSelection === "MercadoLivre") {
      setOnLoading(true);
      const products = await mercadoLivreResultsParse();
      setProductsFound(products)
      setOnLoading(false);
    }
    if (webPageSelection === "Buscapé") {
      setOnLoading(true);
      const products = await buscapeResultsParse();
      setProductsFound(products)
      setOnLoading(false);
    }
    if (webPageSelection === "Todas") {
      setOnLoading(true);
      const mecadoLivreProducts = await mercadoLivreResultsParse();
      const buscapeProducts = await buscapeResultsParse();
      const products = mecadoLivreProducts.concat(buscapeProducts);
      setProductsFound(products)
      setOnLoading(false);
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
        handleClickSearchButton,
        onLoading
      }}
    >
      {children}
    </Context.Provider>
  )


}
