import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Search({setSearch, prompts, setSearchResults}) {
  const searchRef = useRef();

  const handelSearch = ()=>{
    const searchQuery = searchRef.current.value;
    setSearch(searchQuery)
    setSearchResults(prompts.filter(prompt => prompt.author.toLowerCase() == searchQuery.toLowerCase() || prompt.value.toLowerCase().includes(searchQuery.toLowerCase())))
  }

  const dynamicRetore = e=>{
    if(e.target.value == ""){
      setSearch("");
    }
  }

  return (
    <div className="w-full flex items-center gap-4 max-[640px]:flex-col max-[640px]:px-4">
      <div className="relative w-3/4 max-[640px]:w-full flex items-center">
        <label htmlFor="search" className="absolute left-0 py-4 px-4 text-center"><i className="fi fi-br-search text-gray-400"></i></label>
        <input ref={searchRef} onChange={dynamicRetore} onKeyDown={e=> e.key == "Enter"? handelSearch() : null} id="search" className="w-full pl-12 py-4 max-[640px]:py-3 rounded-md outline-none focus:ring-2 focus:ring-[var(--blue-clr)] text-black" type={"search"} placeholder="Search in the Community..."/>
        <button onClick={handelSearch} className="absolute right-3 py-2 px-4 text-center bg-[var(--blue-clr-drk)] rounded-md">Search</button>
      </div>
      <Link className="py-4 max-[640px]:py-3 px-6 max-[640px]:w-full text-center bg-[var(--orange-clr)] rounded-md" to={"/production"}>Generate</Link>
    </div>
  )
}
