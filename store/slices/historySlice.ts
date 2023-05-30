import { BASE_URL } from '@constants/*'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface IInitialState {
	ordersHistory: History[]
	loading: boolean
}

const initialState: IInitialState = {
	ordersHistory: [],
	loading: false
}

export const getOrdersHistory = createAsyncThunk(
	'orders/getOrdersHistory',
	async (email: string) => {
		const { data } = await axios.get<History[]>(`${BASE_URL}/orders/${email}`)
		return data
	}
)

export const historySlice = createSlice({
	name: 'historySlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getOrdersHistory.pending, state => {
			state.loading = true
		})
		builder.addCase(getOrdersHistory.fulfilled, (state, action) => {
			state.ordersHistory = action.payload
			state.loading = false
		})
	}
})

export default historySlice.reducer
