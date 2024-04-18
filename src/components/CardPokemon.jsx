import { useState, useEffect } from "react"
import { getPokemon } from "../actions/api.pokemon"
import { Link, NavLink } from "react-router-dom"



export const CardPokemon = (props) => {

    const { name, linkPokemon } = props

    const [imagen, setImagen] = useState({})

    useEffect(() => {
        getPokemon(linkPokemon).then(response => setImagen(response.sprites.other.dream_world))
    }, [])

    return (


        <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <NavLink to={`/pokemon/${name}`}>
                <div className="relative flex items-end overflow-hidden rounded-xl ">
                    <img src={imagen.front_default} alt="" className="h-[200px] mx-auto" />
                </div>
                <div className="mt-1 p-2 text-center ">
                    <h2 className="text-slate-700"></h2>
                    <p className="mt-1 text-sm text-slate-400"></p>

                    <div>
                       
                        <h1 >{name}</h1> 

                    </div>
                </div>
            </NavLink>




        </article>


        // <div className="flex min-h-screen items-center justify-center bg-gray-100">
        //     <div className="mx-auto px-5">
        //         <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
        //             <img className="w-full rounded-lg object-cover object-center" src={imagen.front_default} alt="" />
        //             <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">{name}</p>
        //             <p className="my-4 pl-4 font-bold text-gray-500"><NavLink to={`/pokemon/${name}`}>detalles</NavLink></p>

        //         </div>
        //     </div>
        // </div>

        // <div>

        //     <h1>{name}</h1>
        //     <img src={imagen.front_default} alt="" /> 
        //     <NavLink to={`/pokemon/${name}`}>detalles</NavLink>
        // </div>


    )
}