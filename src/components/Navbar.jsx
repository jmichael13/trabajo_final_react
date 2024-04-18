import { NavLink } from "react-router-dom"

export const Navbar = () => {

	return (



		<div >
			<section className="bg-white dark:bg-gray-800 ">
				<nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center ">
					
					<div className="h-15 w-15 self-center mr-2" >
						<img className="h-15 w-15 self-center" src= 'public/logo.png'/>
					</div>


					<div className="flex flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0">
						<NavLink to="/" className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500">INICIO</NavLink>
						<NavLink to="/pokedex" className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500">KANTO</NavLink>
						<NavLink to="/johto" className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500">JOHTO</NavLink>
						<NavLink to="/hoenn" className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500">HOENN</NavLink>
						
					</div>

					<a className="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto" target="_blank"
						href="https://www.certus.edu.pe/">
						Certus
					</a>
				</nav>
			</section>



		</div>



	)
}