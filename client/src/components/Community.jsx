import Cards from "./Cards";
import Loader from "./Loader";

export default function Community({search, loading, prompts}) {
    
  return (
    <section className="py-5 px-5 md:px-3 md:py-3 sm:py-1 sm:px-1">
        { search ? <h1 className="text-3xl font-bold my-4 ml-3">Community show case for: <span className="text-[var(--blue-clr)]">"{search}"</span></h1> : <h1 className="text-3xl font-bold my-4 ml-3">The Community show cases:</h1> }
        { loading ? <div className="h-full w-full flex justify-center items-center"> <div className="h-[40px] w-[40px]"><Loader/></div></div> :
        <>
        {search ? <Cards cards={prompts} notFound="No search results found..!"/> : <Cards cards={prompts} notFound="No prompts found..!"/>}
        </>
        }
    </section>
  )
}
