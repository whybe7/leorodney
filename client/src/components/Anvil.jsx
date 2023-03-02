import axios from "axios";
import IMGPlaceholder from '../assets/placeholder.png';
// import Alert from "./Alert"; Not Implemented yet
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Anvil({generating, prompt}) {
  const navigate = useNavigate();
  const [publishing, setPublishing] = useState(false);

  const publishPrompt = async e=>{
    e.preventDefault();
    if(!prompt.author) return alert("You must provide your name to reference your prompt in the community show cases");
    try{
      setPublishing(true)
      const response = await axios.post(`${"leorodney.up.railway.app"}/prompt`, prompt);
      console.log(response.data);
      alert("Your Prompt created successfully and now you will be rederected to the community show cases!");
      navigate("/");
    }catch(error){
      console.error(error);
      alert("Something went wromg!.");
    }finally{
      setPublishing(false);
    }
  }

  return (
    <>
    <section className="h-96 w-72 flex justify-center items-center flex-col gap-6">
        <div className="relative h-[80%] w-full rounded-md overflow-hidden">
          <img className="h-full w-full object-cover" src={prompt.img || IMGPlaceholder} alt="The generated image"/>
          { generating && <div className="absolute left-0 top-0 h-full w-full flex justify-center items-center bg-[#1b1b1bb6] backdrop:blur-lg"><div className="h-20 w-20"><Loader/></div></div> }
        </div>
        <form onSubmit={publishPrompt} className="w-full flex items-center gap-4">
          <a download={"Leorodney-GeneratedImg"} href={prompt.img} className={`w-1/2 py-2 ${ !prompt.img ? "opacity-0 scale-0": ""} text-center bg-green-700 rounded-md transition-all`}>Download</a>
          <button className={`w-1/2 ${ !prompt.img ? "opacity-0 scale-0": ""} py-2 text-center bg-[var(--blue-clr-drk)] rounded-md transition-all`} type="submit" title='Publish to Community'>{publishing ? "Publishing..." : "Publish"}</button>
        </form>
    </section>
    </>
  )
}
