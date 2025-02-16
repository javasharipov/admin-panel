import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// CRUD
// Read -> get -> query
// CUD - post, put, delete - mutation
export const mainApi = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://67b04e1fdffcd88a6788dc0d.mockapi.io',
	}),
	endpoints: () => ({}),
	tagTypes: ['CARS'],
})
