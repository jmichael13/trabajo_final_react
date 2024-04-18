import { useEffect, useState } from "react"
import { getHoenn, getJohto, getPokedex } from "../actions/api.pokemon"
import { CardPokemon } from "./CardPokemon"

export const ListarHoenn = (props) => {

    const { nextUrl } = props

    const [listaPokemon, setListaPokemon] = useState([])

    useEffect(() => {
        getHoenn(nextUrl).then(response => setListaPokemon(response.results))
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