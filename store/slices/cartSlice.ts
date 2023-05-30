import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from '@type/index'

export interface ICartItems extends Product {
	count: number
}

interface IInitialState {
	totalPrice: number
	cartItems: ICartItems[]
}

const initialState: IInitialState = {
	totalPrice: 0,
	cartItems: []
}

export const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		addItemsToCart: (state, action: PayloadAction<Product>) => {
			const findItem = state.cartItems.find(
				item => item._id === action.payload._id
			)
			findItem
				? (findItem.count += 1)
				: state.cartItems.push({ ...action.payload, count: 1 })
			state.totalPrice = state.cartItems.reduce(
				(sum, item) => item.count * item.price + sum,
				0
			)
		},
		clearCart: state => {
			state.cartItems = []
			state.totalPrice = 0
		},
		decrementCount: (state, action: PayloadAction<string>) => {
			const findItem = state.cartItems.find(item => item._id === action.payload)
			if (findItem && findItem.count > 1) {
				findItem.count -= 1
			}
			state.totalPrice = state.cartItems.reduce(
				(sum, item) => item.count * item.price + sum,
				0
			)
		}
	}
})

export const { addItemsToCart, clearCart, decrementCount } = cartSlice.actions

export default cartSlice.reducer
