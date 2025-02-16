import React, { useRef } from 'react'
import { useCreateCarMutation } from '../../redux/api/car.api'

const Createcar = () => {
	const [createCar, { isError, isLoading, status }] = useCreateCarMutation()
	const carName = useRef(null)
	const carBrand = useRef(null)
	const carColor = useRef(null)
	const carYear = useRef(null)
	const carImage = useRef(null)
	const CarBody = useRef(null)

	const handleCreateCar = e => {
		e.preventDefault()
		let newCar = {
			name: carName.current.value,
			brand: carBrand.current.value,
			color: carColor.current.value,
			year: carYear.current.value,
			image: carImage.current.value,
			CarBody: CarBody.current.value,
		}
		createCar(newCar)
			.unwrap()
			.then(() => {
				carName.current.value = ''
				carBrand.current.value = ''
				carColor.current.value = ''
				carYear.current.value = ''
				carImage.current.value = ''
				CarBody.current.value = ''
			})
	}

	return (
		<div className='max-w-md  bg-white p-6 rounded-2xl shadow-lg'>
			<h2 className='text-2xl font-semibold text-center mb-4'>Car Details</h2>
			<form className='space-y-4' onSubmit={handleCreateCar}>
				<input
					ref={carName}
					type='text'
					placeholder='Car Name'
					className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
				/>
				<input
					ref={carBrand}
					type='text'
					placeholder='Brand'
					className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
				/>
				<input
					ref={carColor}
					type='text'
					placeholder='Color'
					className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
				/>
				<input
					ref={carYear}
					type='number'
					placeholder='Year'
					className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
				/>
				<input
					ref={CarBody}
					type='text'
					placeholder='Car Body'
					className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
				/>
				<input
					ref={carImage}
					type='text'
					placeholder='Url Image'
					className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
				/>
				<button
					disabled={isLoading}
					type='submit'
					className='w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 disabled:bg-blue-300'
				>
					{isLoading ? 'Loading' : 'Create'}
				</button>
			</form>
		</div>
	)
}

export default Createcar
