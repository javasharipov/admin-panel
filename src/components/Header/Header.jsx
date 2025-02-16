import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className='fixed top-0 left-0 w-full p-4 flex justify-between items-center border-b-2 border-white/20 bg-white/10 backdrop-blur-md shadow-lg'>
			<nav className='container flex items-center mx-auto'>
				<div className='text-white text-3xl font-bold tracking-widest  flex-1'>
					<span className='text-cyan-300'>Logooo</span>
				</div>
				<ul className='flex space-x-8 text-blue-500 font-medium text-lg'>
					<li className='header-link hover:underline cursor-pointer'>About</li>
					<li className='header-link hover:underline cursor-pointer'>
						Services
					</li>
					<li className='header-link hover:underline cursor-pointer'>
						<NavLink to={'admin'}>Admin</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
