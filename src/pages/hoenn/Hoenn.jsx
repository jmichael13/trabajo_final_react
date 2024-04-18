import { useContext, useEffect, useState } from "react"
import { NavPokemon } from "../../components/NavPokemon"
import { ListarPokemon } from "../../components/ListarPokemon"
import { useParams } from "react-router-dom"
import { ListarJohto } from "../../components/ListarJohto"
import { ListarHoenn } from "../../components/ListarHoen"


export const Hoenn = () => {


    const [nextUrl, setNextUrl] = useState(0)

    return (
        <div className="container">
            
           
            <ListarHoenn nextUrl={nextUrl} />
            
        </div>

    )
}