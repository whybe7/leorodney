
import logo from "../assets/leorodeny.png";

export default function Header({twHeader, twImg, twTitleX, twPX}) {

  return (
    <header className={twHeader || "w-full flex justify-start flex-col"}>
        <img src={logo} className={twImg || "h-52 w-52"} alt="Leorodeny app logo"></img>
        <h1 className={`${twTitleX || "text-9xl"} font-serif`}>LEORODENY</h1>
        <p className={`${twPX || "text-xl"} text-gray-300`}>AI image generator based on <a className="text-orange-600" href="https://openai.com" target={"_blank"} rel="noopener noreferrer">OpenAI</a> Dall.E API.</p>
    </header>
  )
}
