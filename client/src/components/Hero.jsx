import Header from "./Header";
import Links from "./Links";
import Search from "./Search";

import HomeBG from '../assets/home.png';

export default function Hero({setSearch, prompts, setSearchResults}) {
  return (
    <main className="w-screen h-[80vh] max-[640px]:h-[60vh] pl-20 max-[640px]:p-2 pr-4 gap-16 max-[640px]:gap-6 max-[640px]:bg-contain flex flex-col items-end max-[640px]:items-center justify-center" style={{backgroundImage: `url(${HomeBG})`}}>
        <Header/>
        <Search setSearch={setSearch} prompts={prompts} setSearchResults={setSearchResults}/>
        <Links/>
    </main>
  )
}
