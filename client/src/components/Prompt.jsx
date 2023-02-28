import { useState } from "react";
import { getRandomPrompt } from "../utils";

export default function Prompt({generateImg, handelPrompt, generating}) {
    const [surpriseMePrompt, setSurpriseMePrompt] = useState(getRandomPrompt(""));

    return (
        <form onSubmit={generateImg} className="w-[85%] flex justify-center items-center gap-4">
            <input onChange={handelPrompt} name="author" className="w-40 px-6 py-4 rounded-md outline-none focus:ring-2 focus:ring-[var(--blue-clr)] text-black" type={"text"} placeholder="Your Name" title="your name for referencing you prompt in the community"/> 
            <div className="relative w-[70%] flex items-center">
                <input onChange={handelPrompt} name="value" className="w-full px-6 py-4 rounded-md outline-none focus:ring-2 focus:ring-[var(--blue-clr)] text-black" type={"text"} value={surpriseMePrompt} placeholder={surpriseMePrompt} />
                <button type="button" onClick={()=> setSurpriseMePrompt(getRandomPrompt(""))}  className="absolute right-3 py-2 px-4 text-center bg-[var(--blue-clr-drk)] rounded-md">Surprise Me</button>
            </div>
            <button type="submit" className="py-4 px-6 text-center bg-[var(--oil-clr)] rounded-md disabled:cursor-not-allowed disabled:bg-[var(--oil-clr-drk)]" disabled={generating}>Generate</button>
        </form>
    )
}
