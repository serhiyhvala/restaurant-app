import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '@store/slices/productsSlice'

import { productsApi } from '@services/index'

export const store = configureStore({
	reducer: {
		product: productsSlice,
		[productsApi.reducerPath]: productsApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
