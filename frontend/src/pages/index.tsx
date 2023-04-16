import Head from 'next/head'
import ProductCard from '@/components/ProductCard'
import SearchBar from '@/components/SearchBar'
import { useContext } from "react";
import { Context } from "@/context/context";


export default function Home() {

  const {
    productsFound
  } = useContext(Context)

  return (
    <div>
      <Head>
        <title>Busca Livre</title>
      </Head>
      <main>
        <div
          className="fixed top-0 border md:w-2/3 bg-slate-200 w-full text-center py-1 text-sm md:text-xl md:p-2">
          <SearchBar />
        </div>
        <div
          className="my-14 md:my-20"
        >
          {productsFound.map((products, i) => {
            return (
              <ProductCard key={i} >{products}</ProductCard>
            )
          })}
        </div>
      </main>
    </div>
  )
}
