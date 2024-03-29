import { useContext } from "react";
import { Context } from "@/context/context";
import { webpagesNames } from "@/helpers/webpages";
import { categoriesNames } from "@/helpers/categories";

export default function SearchBar() {
  const {
    setWebPageSelection,
    setCategorySelection,
    queryInput,
    setQueryInput,
    handleClickSearchButton,
    onLoading
  } = useContext(Context)

  return (
    <div
      className="flex flex-row">
      <select
        onChange={(e) => {
          setWebPageSelection(e.target.value)
        }}
        disabled={onLoading}
        defaultValue={'DEFAULT'} 
        className="p-1 m-1 text-xs w-1/4 md:text-base md:w-fit"
      >
        <option disabled value="DEFAULT">
          Web
        </option>
        {webpagesNames.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select >
      <select
        onChange={(e) => {
          setCategorySelection(e.target.value)
        }}
        disabled={onLoading}
        defaultValue={'DEFAULT'} 
        className="p-1 m-1 text-xs w-1/4 md:text-base md:w-fit"
      >
        <option disabled value="DEFAULT">
          Categorias
        </option>
        {categoriesNames.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={queryInput}
        disabled={onLoading}
        onChange={(e) => {
          setQueryInput(e.target.value)
        }}
        className="p-1 m-1 w-fit text-xs md:text-base md:w-full"
      />

      <button
        onClick={() => handleClickSearchButton()}
        disabled={onLoading}
        className={`border m-1 p-1 px-2 text-xs text-zinc-50 w-2/12 md:text-base md:w-1/4 ${onLoading ? "bg-slate-400" : "bg-blue-700"}`}
      >
        Buscar
      </button>
    </div>
  )
}
