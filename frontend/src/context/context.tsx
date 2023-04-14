import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type contextProps = {
  children: ReactNode;
}

type contextType = {
  webPageSelection: string,
  setWebPageSelection: Dispatch<SetStateAction<string>>;
  categorySelection: string,
  setCategorySelection: Dispatch<SetStateAction<string>>;
  queryInput: string,
  setQueryInput: Dispatch<SetStateAction<string>>;
}

export const Context = createContext<contextType>({} as contextType);

export const ContextProvider = ({ children }: contextProps) => {
  
  const [webPageSelection, setWebPageSelection] = useState<string>('Todas');
  const [categorySelection, setCategorySelection] = useState<string>('');
  const [queryInput, setQueryInput] = useState<string>('');

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
