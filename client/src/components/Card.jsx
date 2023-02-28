
export default function Card({author, value, img}) {
  return (
    <div className="relative group flex justify-center items-center rounded-md overflow-hidden">
      <img src={img} alt={value} className="w-full h-full object-cover"/>
      <p className="absolute p-3 bottom-[-120%] group-hover:bottom-0 transition-all w-full bg-slate-200 text-gray-900">
        <span className="font-bold block underline text-xl mb-2 text-black">{author}</span>
        {value}
      </p>
    </div>
  )
}
