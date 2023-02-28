import { useState } from 'react';
import axios from "axios";

import Anvil from "./Anvil";
import Header from "./Header";
import Prompt from "./Prompt";

import ProductionBG from "../assets/production.png";

export default function Prod() {
  const [prompt, setPrompt] = useState({author:"", value:"", img:""});
  const [generating, setGenerating] = useState(false);

  const handelPrompt = e=>{
    setPrompt({...prompt, [e.target.name]: e.target.value});
  }

  const prePrompt = (surpriseMePrompt)=>{
    setPrompt({...prompt, value: surpriseMePrompt});
  }

  const generateImg = async e=>{
    e.preventDefault();
    console.log(prompt.value);
    if(!prompt.value){ return console.error("Prompt Must not be empty") }
    try {
      setGenerating(true);
      // const response = await axios.post(`${import.meta.env.VITE_SERVER_HOOK_API}/leorodney`, prompt);
      const response = await axios.post(`${import.meta.env.VITE_SERVER_HOOK_API}/leorodney`, {prompt: prompt.value});
      setPrompt({...prompt,  img: `data:image/png;base64,${response.data.img}`});
    } catch (error) {
      console.error(error);
    } finally{
      setGenerating(false);
    }
}

  return (
    <main className="relative w-screen h-screen px-10 gap-10 flex flex-col items-center justify-center " style={{backgroundImage: `url(${ProductionBG})`}}>
        <Header twHeader={"flex justify-center items-center flex-col"} twTitleX={"text-7xl"} twImg={"h-42 w-42"} twPX={"text-lg"}/>
        <Prompt generateImg={generateImg} handelPrompt={handelPrompt} prePrompt={prePrompt} prompt={prompt} generating={generating}/>
        <Anvil generating={generating} prompt={prompt}/>
    </main>
  )
}
