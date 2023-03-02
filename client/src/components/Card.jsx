import { downloadPomptImg } from "../utils";

export default function Card({_id, author, value, img}) {
  return (
    <div className="relative group flex justify-center items-center rounded-md overflow-hidden">
      <img src={img} alt={value} className="w-full h-full object-cover"/>
      <div className="absolute rounded-md p-3 left-1/2 -translate-x-1/2 bottom-[-120%] group-hover:bottom-2 transition-all max-h-[80%] w-[90%] bg-slate-200 ">
        <div className="flex justify-between items-center">
          <span className="font-bold block underline text-xl mb-2 text-black">{author}</span>
          <button onClick={()=> downloadPomptImg("leorodney-"+_id, img)} title="download this image" className={"w-8 h-8"}><i className="fi fi-br-arrow-small-down flex items-center justify-center rounded-full h-full w-full m-0 bg-[var(--blue-clr-drk)] text-center text-lg"></i></button>
        </div>
        <p className=" max-h-[70%] text-gray-900">{value}</p>
      </div>
    </div>
  )
}
