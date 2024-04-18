import { Route, Routes } from "react-router-dom"
import { Pokedex } from "../pages/pokedex/Pokedex"
import { Home } from "../pages/home/Home"
import { Pokemon } from "../pages/pokedex/pokemon"
import { Johto } from "../pages/johto/Johto"
import { Hoenn } from "../pages/hoenn/Hoenn"

export const AppRouters =()=>{

    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pokedex/' element={<Pokedex/>} />
            <Route path='/johto/' element={<Johto/>} />
            <Route path='/hoenn/' element={<Hoenn/>} />
            <Route path='/pokemon/:tag' element={<Pokemon/>} />
        </Routes>
    )
}