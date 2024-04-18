
export const NavPokemon = (props) => {

    const { nextUrl, setNextUrl } = props

    const sgtPage = () => {
        setNextUrl(nextUrl + 20)
    }

    const prvPage = () => {
        setNextUrl(nextUrl - 20)
    }

    return (
        <header className="d-flex justify-content-between p-3 bg-secondary text-white">
            <button onClick={() => prvPage()} disabled={nextUrl<1}>Anterior</button>
            <h1>{nextUrl}</h1>
            <button onClick={() => sgtPage()} >Siguiente</button>

        </header>
    )
}