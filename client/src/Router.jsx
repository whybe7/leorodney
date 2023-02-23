import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Production from "./pages/Production";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="/production" element={<Production/>}/>
        </Routes>
    </BrowserRouter>
  )
}
