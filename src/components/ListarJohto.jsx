import { useEffect, useState } from "react"
import { getJohto, getPokedex } from "../actions/api.pokemon"
import { CardPokemon } from "./CardPokemon"

export const ListarJohto = (props) => {

    const { nextUrl } = props

    const [listaPokemon, setListaPokemon] = useState([])

    useEffect(() => {
        getJohto(nextUrl).then(response => setListaPokemon(response.results))
    }, [])

   

    return (
        <div className="row">

            {
                listaPokemon.map((pokemon) => (
                    <div key={pokemon.name} className="col-12 col-sm-6 col-md-4 col-lg-3 text-center p-3 border">
                        <CardPokemon name={pokemon.name} linkPokemon={pokemon.url} />
                    </div>
                ))
            }

        </div>
    )
}