import logo from "../assets/leorodeny.png";

export default function Header({twHeader, twImg, twTitleX, twPX}) {

  return (
    <header className={twHeader || "w-full flex justify-start flex-col max-[640px]:justify-center items-center"}>
      {/* <div className=""> */}
        <img src={logo} className={(twImg || "w-52") && "max-[640px]:w-24"} alt="Leorodeny app logo"></img>
      {/* </div> */}
      <h1 className={`${twTitleX || "text-9xl"}  max-[640px]:text-5xl font-serif`}>LEORODENY</h1>
      <p className={`${twPX || "text-xl"} text-gray-300 max-[640px]:text-center max-[640px]:text-sm`}>AI image generator based on <a className="text-orange-600" href="https://openai.com" target={"_blank"} rel="noopener noreferrer">OpenAI</a> Dall.E API.</p>
    </header>
  )
}
