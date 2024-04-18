import { useContext, useEffect, useState } from "react"
import { NavPokemon } from "../../components/NavPokemon"
import { ListarPokemon } from "../../components/ListarPokemon"
import { useParams } from "react-router-dom"


export const Pokedex = () => {


    const [nextUrl, setNextUrl] = useState(0)

    return (
        <div className="container">
            
           
            <ListarPokemon nextUrl={nextUrl} />
            
        </div>

    )
}