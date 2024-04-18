import { useContext, useEffect, useState } from "react"
import { NavPokemon } from "../../components/NavPokemon"
import { ListarPokemon } from "../../components/ListarPokemon"
import { useParams } from "react-router-dom"
import { ListarJohto } from "../../components/ListarJohto"


export const Johto = () => {


    const [nextUrl, setNextUrl] = useState(0)

    return (
        <div className="container">
            
           
            <ListarJohto nextUrl={nextUrl} />
            
        </div>

    )
}