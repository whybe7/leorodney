import Anvil from "./Anvil";
import Header from "./Header";
import Prompt from "./Prompt";

import ProductionBG from "../assets/production.png";

export default function Prod() {
  return (
    <main className="w-screen h-screen px-10 gap-16 flex flex-col items-center justify-center" style={{backgroundImage: `url(${ProductionBG})`}}>
        <Header twHeader={"flex justify-center items-center flex-col"} twTitleX={"text-7xl"} twImg={"h-42 w-42"}/>
        <Prompt/>
        <Anvil/>
    </main>
  )
}
