export const getPokedex = async (next_page)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`)
    const dataPokedex =await response.json()
    return dataPokedex
}

export const getJohto = async (next_page)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100`)
    const dataJohto =await response.json()
    return dataJohto
}

export const getHoenn = async (next_page)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135`)
    const dataHoenn =await response.json()
    return dataHoenn
}

export const getPokemon = async (url_pokemon)=>{
    const response = await fetch(url_pokemon)
    const dataPokemon =await response.json()
    return dataPokemon
}


export const getPoke = async (data_poke)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${data_poke}`)
    const dataPoke =await response.json()
    return dataPoke
}

export const getPokeImagen = async (data_poke)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${data_poke}`)
    const dataPoke =await response.json()
    return dataPoke
}

export const getPokeAbiliti = async (data_poke)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${data_poke}`)
    const dataPoke =await response.json()
    return dataPoke
}

export const getPokeStats = async (data_poke)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${data_poke}`)
    const dataPoke =await response.json()
    return dataPoke
}

export const getPokeSpecie = async (data_poke)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data_poke}`)
    const dataPoke =await response.json()
    return dataPoke
}


