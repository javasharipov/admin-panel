import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout/Layout'
import Home from '../pages/Home/Home'
import Admin from '../pages/Admin/Admin'
import Cars from '../pages/admin/Cars'
import Createcar from '../pages/admin/Createcar'
import Documents from '../pages/admin/Documents'
import Employees from '../pages/admin/Employees'
import Orders from '../pages/admin/Orders'
import Payments from '../pages/admin/Payments'
import Reports from '../pages/admin/Reports'
import Analytics from '../pages/admin/Analytics'
import Settings from '../pages/admin/Settings'
import Notification from '../pages/admin/Notification'

const RouterMain = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
			</Route>
			<Route path='admin' element={<Admin />}>
				<Route path='cars' element={<Cars />} />
				<Route path='createcar' element={<Createcar />} />
				<Route path='documents' element={<Documents />} />
				<Route path='employees' element={<Employees />} />
				<Route path='orders' element={<Orders />} />
				<Route path='payments' element={<Payments />} />
				<Route path='reports' element={<Reports />} />
				<Route path='analytics' element={<Analytics />} />
				<Route path='settings' element={<Settings />} />
				<Route path='notification' element={<Notification />} />
			</Route>
		</Routes>
	)
}

export default RouterMain
