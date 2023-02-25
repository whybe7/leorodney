import { useState } from "react";
import Community from "../components/Community";
import Hero from "../components/Hero";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
    <Hero setSearch={setSearch}/>
    <Community search={search}/>
    </>
  )
}

