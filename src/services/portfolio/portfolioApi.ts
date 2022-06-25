import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Education } from './types'

// Define a service using a base URL and expected endpoints
export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getEducation: builder.query<Education, string>({
      query: () => `education/`,
    }),
  }),
})

export const { useGetEducationQuery } = portfolioApi