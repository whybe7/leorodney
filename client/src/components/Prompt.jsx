import { getRandomPrompt } from "../utils";

export default function Prompt({generateImg, handelPrompt, prePrompt, prompt, generating}) {
    return (
        <form onSubmit={generateImg} className="w-[85%] max-[640px]:w-full flex justify-center items-center gap-4 max-[640px]:flex-col max-[640px]:px-4">
            <input onChange={handelPrompt} name="author" className="w-40 max-[640px]:w-full px-6 py-4 max-[640px]:py-3 rounded-md outline-none focus:ring-2 focus:ring-[var(--blue-clr)] text-black" type={"text"} placeholder="Your Name" title="your name for referencing you prompt in the community"/> 
            <div className="relative w-[70%] max-[640px]:w-full flex items-center">
                <textarea onChange={handelPrompt} name="value" className="w-full min-h-[60px] px-6 py-4 max-[640px]:h-350 rounded-md outline-none focus:ring-2 focus:ring-[var(--blue-clr)] text-black" type={"text"} value={prompt.value} placeholder={"Your Prompt Here...."} ></textarea>
                <button type="button" onClick={()=> prePrompt(getRandomPrompt(""))}  className="absolute right-3 bottom-2 py-2 px-4 text-center bg-[var(--blue-clr-drk)] rounded-md">Surprise Me</button>
            </div>
            <button type="submit" className="py-4 max-[640px]:py-3 px-6 max-[640px]:w-full text-center bg-[var(--oil-clr)] rounded-md disabled:cursor-not-allowed disabled:bg-[var(--oil-clr-drk)]" disabled={generating}>Generate</button>
        </form>
    )
}
