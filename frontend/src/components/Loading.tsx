import Image from "next/image";
import * as loading from '../../public/loading-gif.gif'

export default function Loading() {
  return (
      <Image src={loading} alt="loading circle" className="mx-auto" />
  )
}