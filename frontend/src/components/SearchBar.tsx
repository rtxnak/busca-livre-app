import { webpagesNames } from "@/helpers/webpages";
import { categoriesNames } from "@/helpers/categories";

export default function SearchBar() {
  return (
    <div
      className="flex flex-row">
      <select
        // onChange={}
        className="p-1 m-1 text-xs w-1/4 md:text-base md:w-fit"
      >
        {webpagesNames.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select >
      <select
        // onChange={}
        className="p-1 m-1 text-xs w-1/4 md:text-base md:w-fit"
      >
        {categoriesNames.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        // value={}
        // onChange={}
        className="p-1 m-1 w-fit text-xs md:text-base md:w-full"
      />

      <button
        // onClick={}
        className="border m-1 p-1 px-2 text-xs bg-blue-700 text-zinc-50 w-2/12 md:text-base md:w-1/4"
      >
        Buscar
      </button>
    </div>
  )
}
