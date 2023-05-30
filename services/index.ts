import { BASE_URL } from '@constants/*'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Category, Coupon } from '@type/index'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	endpoints: builder => ({
		getCategories: builder.query<Category[], string>({
			query: name => `${name}`
		}),
		getCoupons: builder.query<Coupon[], string>({
			query: name => `${name}`
		})
	})
})

export const { useGetCategoriesQuery, useGetCouponsQuery } = productsApi
