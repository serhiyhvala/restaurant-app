import { BASE_URL } from '@constants/*'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Product } from '@type/index'
import axios from 'axios'

type initialStateType = {
	products: Product[]
	loading: boolean
	category: string
}

const initialState: initialStateType = {
	products: [],
	loading: false,
	category: ''
}

export const getAllProducts = createAsyncThunk(
	'products/getAllProducts',
	async () => {
		const { data } = await axios.get<Product[]>(`${BASE_URL}/products`)
		return data
	}
)

export const productsSlice = createSlice({
	name: 'productSlice',
	initialState,
	reducers: {
		setNewCategory: (state, action: PayloadAction<string>) => {
			state.category = action.payload
		}
	},
	extraReducers: builder => {
		builder.addCase(getAllProducts.pending, state => {
			state.loading = true
		})
		builder.addCase(getAllProducts.fulfilled, (state, action) => {
			state.products = action.payload
			state.loading = false
		})
		builder.addCase(getAllProducts.rejected, state => {
			state.loading = false
		})
	}
})

export const { setNewCategory } = productsSlice.actions
export default productsSlice.reducer
