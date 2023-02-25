import Header from "./Header";
import Links from "./Links";
import Search from "./Search";

import HomeBG from '../assets/home.png';

export default function Hero({setSearch}) {
  return (
    <main className="w-screen h-[80vh] pl-20 pr-4 gap-16 flex flex-col items-end justify-center" style={{backgroundImage: `url(${HomeBG})`}}>
        <Header/>
        <Search setSearch={setSearch}/>
        <Links/>
    </main>
  )
}
