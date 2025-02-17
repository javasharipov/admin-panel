import React, { useRef } from 'react'

const Popup = ({ onClose }) => {
	const carName = useRef(null)
	const carBrand = useRef(null)
	const carColor = useRef(null)
	const carYear = useRef(null)
	const carBody = useRef(null)
	const carImage = useRef(null)

	const handleCreateCar = e => {
		e.preventDefault()

		onClose()
	}

	return (
		<div className='fixed z-50 bg-[#eeeeee7d] w-full h-screen'>
			<div className='fixed  inset-0 flex items-center justify-center  '>
				<div className='max-w-md bg-white p-6 rounded-2xl shadow-lg relative'>
					<button
						onClick={onClose}
						className='absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full'
					>
						Close
					</button>

					<h2 className='text-2xl font-semibold text-center mb-4'>
						Car Details
					</h2>
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
							ref={carBody}
							type='text'
							placeholder='Car Body'
							className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
						/>
						<input
							ref={carImage}
							type='text'
							placeholder='Image URL'
							className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
						/>

						<button
							type='submit'
							className='w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600'
						>
							Save
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Popup
