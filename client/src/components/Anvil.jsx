import IMGPlaceholder from '../assets/placeholder.png';
import Loader from "./Loader";

export default function Anvil({generating, setGenerating}) {

  return (
    <section className="h-96 w-72 flex justify-center items-center flex-col gap-6">
        <div className="relative h-[80%] w-full rounded-md overflow-hidden">
          <img className="h-full w-full object-cover" src={IMGPlaceholder} alt="The generated image"/>
          { generating && <div className="absolute left-0 top-0 h-full w-full flex justify-center items-center bg-[#1b1b1bb6] backdrop:blur-lg"><div className="h-20 w-20"><Loader/></div></div> }
        </div>
        <button className="w-full py-4 text-center bg-[var(--blue-clr-drk)] rounded-md">Publish to Community</button>
    </section>
  )
}
