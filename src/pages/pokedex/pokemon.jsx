import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPoke, getPokeAbiliti, getPokeImagen, getPokeSpecie, getPokeStats } from "../../actions/api.pokemon"
import Carousel from 'react-bootstrap/Carousel'


export const Pokemon = () => {

    const params = useParams()

    const [detalles, setDetalles] = useState([])
    const [imagen, setImagen] = useState([])
    const [abilitie, setAbilitie] = useState([])
    const [stats, setStats] = useState([])
    const [specie, setSpecie] = useState([])

    useEffect(() => {
        getPoke(params.tag).then(res => setDetalles(res))
    }, [])

    useEffect(() => {
        getPokeImagen(params.tag).then(res => setImagen(res.sprites.other.home))
    }, [])

    useEffect(() => {
        getPokeAbiliti(params.tag).then(res => setAbilitie(res.abilities))
    }, [])

    useEffect(() => {
        getPokeStats(params.tag).then(res => setStats(res.stats))
    }, [])

    useEffect(() => {
        getPokeSpecie(params.tag).then(res => setSpecie(res.flavor_text_entries.flavor_text))
    }, [])



    return (
        <div>



            <section className="relative bg-blueGray-50">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-10/12 md:w-6/12 lg:w-6/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                            <div className="relative flex flex-col min-w-0 break-words bg-brown w-full mb-6 shadow-lg rounded-lg bg-brown-500">

                                <Carousel fade >
                                    <Carousel.Item interval={1500}>
                                        <img
                                            className="d-block w-100"
                                            src={imagen.front_default}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item interval={1500}>
                                        <img
                                            className="d-block w-100"
                                            src={imagen.front_shiny}
                                            alt="Second slide"
                                        />

                                    </Carousel.Item>

                                </Carousel>

                                <blockquote className="relative p-8 mb-4">
                                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                                        <polygon points="-30,95 583,95 583,65" className="text-blue-500 fill-current"></polygon>
                                    </svg>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4 ">
                            <h1 className="block font-sans text-5xl font-semibold leading-tight tracking-normal text-blue-600 antialiased text-center">#{detalles.id} {detalles.name}</h1>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold text-center">PESO</h6>
                                            <p className="mb-4 text-blueGray-500 text-center">
                                                {(detalles.weight) / 10} Kilogramos
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">

                                            <h6 className="text-xl mb-1 font-semibold text-center">
                                                HABILIDADES

                                            </h6>
                                            <p className="mb-4 text-blueGray-500 text-center">
                                                {
                                                    abilitie.map((abilities) => (
                                                        <div >
                                                            <p>{abilities.ability.name}</p>
                                                        </div>
                                                    ))
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">

                                            <h6 className="text-xl mb-1 font-semibold text-center">TAMAÑO</h6>
                                            <p className="mb-4 text-blueGray-500 text-center">
                                                {(detalles.height) / 10} Metros.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">

                                            <h6 className="text-xl mb-1 font-semibold text-center">ESTADISTICAS</h6>
                                            <p className="mb-4 text-blueGray-500 text-center">

                                                {
                                                    stats.map((stats) => (
                                                        <div key={detalles.forms.url}>
                                                            <p>{stats.stat.name} : {stats.base_stat}</p>

                                                        </div>
                                                    ))
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* <p>{specie['26']}</p> */}



        </div>
    )
}