
export default function Prompt() {
    return (
        <div className="w-full flex items-center gap-4">
            <div className="relative w-3/4 flex items-center">
                <input className="w-full pl-12 py-4 rounded-md outline-none focus:ring-2 focus:ring-[var(--blue-clr)] text-black" type={"text"} placeholder="Your Prompt Here..." />
                <button className="absolute right-3 py-2 px-4 text-center bg-[var(--blue-clr-drk)] rounded-md">Surprise Me</button>
            </div>
            <button className="py-4 px-6 text-center bg-[var(--oil-clr)] rounded-md">Generate</button>
        </div>
    )
}
