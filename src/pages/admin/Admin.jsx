import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Admin = () => {
	return (
		<div className='flex'>
			<div className='w-80 bg-blue-950 text-white p-6 flex flex-col'>
				<p className='text-2xl font-bold'>Admin Dashboard</p>
				<ul className='my-6 flex-1'>
					<li className='px-8 py-2 rounded active:bg-blue-600 '>
						<NavLink to='cars' className='block py-2 indent-1'>
							Cars
						</NavLink>
					</li>
					<li className='px-8 py-2 rounded active:bg-blue-600 '>
						<NavLink to='createcar' className='block py-2 indent-1'>
							Create Car
						</NavLink>
					</li>
					<li className='px-8 py-2 rounded active:bg-blue-600 '>
						<NavLink to='documents' className='block py-2 indent-1'>
							Documents
						</NavLink>
					</li>
					<li className='px-8 py-2 rounded active:bg-blue-600 '>
						<NavLink to='employees' className='block py-2 indent-1'>
							Employees
						</NavLink>
					</li>
					<li className='px-8 py-2 rounded active:bg-blue-600 '>
						<NavLink to='orders' className='block py-2 indent-1'>
							Orders
						</NavLink>
					</li>
					<li className='px-8 py-2 rounded active:bg-blue-600 '>
						<NavLink to='payments' className='block py-2 indent-1'>
							Payments
						</NavLink>
					</li>
					<li className='px-8 py-2 rounded active:bg-blue-600 '>
						<NavLink to='reports' className='block py-2 indent-1'>
							Reports
						</NavLink>
					</li>
					<li className='px-8 py-2 rounded active:bg-blue-600 '>
						<NavLink to='analytics' className='block py-2 indent-1'>
							Analytics
						</NavLink>
					</li>
					<li className='px-8 py-2 rounded active:bg-blue-600 '>
						<NavLink to='settings' className='block py-2 indent-1'>
							Settings
						</NavLink>
					</li>
					<li className='px-8 py-2 rounded active:bg-blue-600 '>
						<NavLink to='notification' className='block py-2 indent-1'>
							Notifications
						</NavLink>
					</li>
				</ul>
				<button className='bg-red-500 rounded py-2'>Log Out</button>
			</div>
			<div className='flex min-h-screen flex-1 p-6'>
				<Outlet />
			</div>
		</div>
	)
}

export default Admin
