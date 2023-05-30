import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '@store/slices/cartSlice'
import historySlice from '@store/slices/historySlice'
import productsSlice from '@store/slices/productsSlice'

import { productsApi } from '@services/index'

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		product: productsSlice,
		history: historySlice,
		[productsApi.reducerPath]: productsApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
