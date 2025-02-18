import React, { useState } from 'react'
import { useUpdateCarMutation } from '../../redux/api/car.api'

const Popup = ({ onClose, car }) => {
	const [updateCar] = useUpdateCarMutation()

	const [formData, setFormData] = useState({
		name: car?.name || '',
		brand: car?.brand || '',
		color: car?.color || '',
		year: car?.year || '',
		image: car?.image || '',
		CarBody: car?.CarBody || '',
	})

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleUpdate = async e => {
		e.preventDefault()
		await updateCar({ id: car.id, ...formData })
		onClose()
	}

	return (
		<div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
			<div className='bg-white p-6 rounded-lg shadow-lg w-96'>
				<h2 className='text-xl font-semibold mb-4'>Edit Car</h2>
				<form onSubmit={handleUpdate} className='space-y-4'>
					<input
						name='name'
						value={formData.name}
						onChange={handleChange}
						className='w-full p-2 border'
					/>
					<input
						name='brand'
						value={formData.brand}
						onChange={handleChange}
						className='w-full p-2 border'
					/>
					<input
						name='color'
						value={formData.color}
						onChange={handleChange}
						className='w-full p-2 border'
					/>
					<input
						name='year'
						value={formData.year}
						onChange={handleChange}
						className='w-full p-2 border'
					/>
					<input
						name='CarBody'
						value={formData.CarBody}
						onChange={handleChange}
						className='w-full p-2 border'
					/>
					<input
						name='image'
						value={formData.image}
						onChange={handleChange}
						className='w-full p-2 border'
					/>

					<div className='flex justify-between mt-4'>
						<button
							type='submit'
							className='bg-blue-500 text-white px-4 py-2 rounded'
						>
							Save
						</button>
						<button
							onClick={onClose}
							className='bg-gray-500 text-white px-4 py-2 rounded'
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Popup
