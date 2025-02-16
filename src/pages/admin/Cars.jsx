import React, { useState } from 'react'
import { useDeleteCarMutation, useGetCarsQuery } from '../../redux/api/car.api'

const Cars = () => {
	const { data } = useGetCarsQuery()
	const [deleteCar] = useDeleteCarMutation()
	const handleDeleteCar = id => {
		deleteCar(id)
	}

	const [edit, setEdit] = useState(null)
	const handleEdit = car => {
		setEdit(car)
		// carName.current.value = car.carName
		// carBrand.current.value = car.carBrand
		// carColor.current.value = car.carColor
		// carYear.current.value = car.carYear
		// carImage.current.value = car.carImage
		// CarBody.current.value = car.CarBody
	}
	return (
		<div className='flex flex-wrap gap-3'>
			{data?.map(car => (
				<div
					key={car.id}
					className='w-72 h-[530px] bg-white rounded-xl shadow-md overflow-hidden'
				>
					<div className='w-full h-40 bg-gray-200 flex items-center justify-center'>
						<span className='text-gray-500 text-sm '>
							<img src={car.image} alt='' />
						</span>
					</div>
					<div className='p-4 space-y-2 mt-4'>
						<h3 className='text-lg font-semibold'>{car.name}</h3>
						<p className='text-gray-600 text-sm'>
							<span className='font-semibold'>Brand:</span>
							{car.brand}
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
						<button className='w-full bg-blue-500 text-white p-2 rounded-md mt-2 hover:bg-blue-600 cursor-pointer'>
							View Details
						</button>
						<button
							onClick={() => handleDeleteCar(car.id)}
							className='w-full bg-red-500 text-white p-2 rounded-md mt-2 hover:bg-red-600 cursor-pointer'
						>
							Delete
						</button>
						<button
							onClick={() => handleEdit(car)}
							className='w-full bg-green-500 text-white p-2 rounded-md mt-2 hover:bg-green-600 cursor-pointer'
						>
							Edit
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default Cars
