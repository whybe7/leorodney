import { useState } from 'react';

import Anvil from "./Anvil";
import Header from "./Header";
import Prompt from "./Prompt";

import ProductionBG from "../assets/production.png";

export default function Prod() {
  const [prompt, setPrompt] = useState({author:"", value:"", img:""});
  const [generating, setGenerating] = useState(true);

  const handelPrompt = e=>{
    setPrompt({...prompt, [e.target.name]: e.target.value})
  }

  const generateImg = e=>{
    e.preventDefault();
}

  return (
    <main className="w-screen h-screen px-10 gap-10 flex flex-col items-center justify-center " style={{backgroundImage: `url(${ProductionBG})`}}>
        <Header twHeader={"flex justify-center items-center flex-col"} twTitleX={"text-7xl"} twImg={"h-42 w-42"} twPX={"text-lg"}/>
        <Prompt generateImg={generateImg} handelPrompt={handelPrompt} generating={generating}/>
        <Anvil generating={generating} setGenerating={setGenerating}/>
    </main>
  )
}
