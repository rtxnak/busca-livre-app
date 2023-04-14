import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`text-xs md:text-base text-gray-800 bg-white 
    w-full min-h-screen h-full md:w-2/3 md:mx-auto border
    `}>
      <div
        className="pb-2">
        {props.children}
      </div>
      <div
        className="fixed bottom-0 border md:w-2/3 bg-slate-200 w-full text-center"
      >
        <Footer />
      </div>
    </div>
  )
}