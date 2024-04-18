import { useState } from "react"
import { Navbar, Pokedex } from "."
import { NavPokemon } from "./components/NavPokemon"
import { AppRouters } from "./routers/AppRouters"
import { Footer } from "./components/Footer"


export const Principal = () => {


    return (

        <div className="colorcss">
            <Navbar />
            <AppRouters />
            <Footer />
        </div>
    )
}