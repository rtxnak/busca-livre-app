import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/context/context";

export default function ProductCard({ children }: any) {
  const {
    webAndCategoryOnSearch
  } = useContext(Context);

  const websiteReference = () => {
    const mercadoLivreWebsite = 'www.mercadolivre.com';
    const buscapeWebsite = 'www.buscape.com.br'
    if (webAndCategoryOnSearch.webpage === 'MercadoLivre') {
      return (
        <p>{mercadoLivreWebsite}</p>
      )
    }
    if (webAndCategoryOnSearch.webpage === 'Buscapé') {
      return (
        <p>{buscapeWebsite}</p>
      )
    }
  }

  return (
    <div className="grid grid-cols-4 mx-1 mt-3 md:mt-6">
      <div
        className="flex mx-auto col-span-1"
      >
        <Image alt={`foto do ${children.description}`} src={children.img} width={200} height={200} className="border h-fit" />
      </div>

      <div
        className="col-span-2 my-2 mx-1 flex flex-col justify-between"
      >
        <p
          className="text-xs font-bold md:text-2xl"
        >{children.description}</p>
        <p
          className="text-xs md:text-2xl my-1"
        >
          Categoria: {webAndCategoryOnSearch.category}
        </p>
        <p
          className="text-lg text-center md:text-left md:text-4xl text-gray-500"
        >{children.price}</p>
      </div>

      <div
        className="col-span-1 items-center flex"
      >
        <Link href={children.link}>
          <button
            className="border p-2 bg-blue-700 text-zinc-50 text-base md:p-3 md:text-2xl"
          >Ir a web
          </button>
          <span
            className="text-xxs md:text-sm"
          >
            {websiteReference()}
          </span>
        </Link>
      </div>
    </div>
  )
}