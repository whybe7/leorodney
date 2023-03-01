import { useEffect, useState } from "react";
import axios from "axios";
import Community from "../components/Community";
import Hero from "../components/Hero";

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompts, setPrompts] = useState([]);

  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_SERVER_HOOK_API}/community`);
        setPrompts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error)
      }finally{
        setLoading(false)
      }
    })()
  },[]);

  return (
    <>
    <Hero setSearch={setSearch} prompts={prompts} setPrompts={setPrompts}/>
    <Community search={search} prompts={prompts} loading={loading}/>
    </>
  )
}

