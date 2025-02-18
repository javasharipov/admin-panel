import React, { useState } from 'react'
import { useDeleteCarMutation, useGetCarsQuery } from '../../redux/api/car.api'
import Popup from './Popup'

const Cars = () => {
	const { data } = useGetCarsQuery()
	const [edit, setEdit] = useState(null)

	const [deleteCar] = useDeleteCarMutation()
	const handleDeleteCar = id => {
		deleteCar(id)
	}
	return (
		<div className='flex flex-wrap gap-3'>
			{data?.map(car => (
				<div
					key={car.id}
					className='w-72 h-[480px] bg-white rounded-xl shadow-md overflow-hidden'
				>
					<div className='w-full h-40 bg-gray-200 flex items-center justify-center'>
						<img src={car.image} alt='' className='max-w-full max-h-full' />
					</div>
					<div className='p-4 space-y-2 mt-4'>
						<h3 className='text-lg font-semibold'>{car.name}</h3>
						<p className='text-gray-600 text-sm'>
							<span className='font-semibold'>Brand:</span> {car.brand}
						</p>
						<p className='text-gray-600 text-sm'>
							<span className='font-semibold'>Color:</span> {car.color}
						</p>
						<p className='text-gray-600 text-sm'>
							<span className='font-semibold'>Year:</span> {car.year}
						</p>
						<p className='text-gray-600 text-sm'>
							<span className='font-semibold'>Body:</span> {car.CarBody}
						</p>

						<button
							onClick={() => handleDeleteCar(car.id)}
							className='w-full bg-red-500 text-white p-2 rounded-md mt-2 hover:bg-red-600 cursor-pointer'
						>
							Delete
						</button>
						<button
							onClick={() => setEdit(car)}
							className='w-full bg-green-500 text-white p-2 rounded-md mt-2 hover:bg-green-600 cursor-pointer'
						>
							Edit
						</button>
					</div>
				</div>
			))}

			{edit && <Popup onClose={() => setEdit(null)} car={edit} />}
		</div>
	)
}

export default Cars
