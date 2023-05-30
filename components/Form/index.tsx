'use client'

import { BASE_URL } from '@constants/*'
import { clearCart } from '@store/slices/cartSlice'
import axios from 'axios'
import { ChangeEvent, FormEvent, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@hooks/index'

import styles from './form.module.scss'

interface IInputData {
	name: string
	email: string
	address: string
	phone: string
}

const Form = () => {
	const { cartItems, totalPrice } = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()
	const [inputData, setInputData] = useState<IInputData>({
		name: '',
		email: '',
		address: '',
		phone: ''
	})
	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setInputData({ ...inputData, [event.target.name]: event.target.value })
	}

	const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const newOrder = { ...inputData, orders: cartItems, totalPrice }
		try {
			await axios
				.post(`${BASE_URL}/orders`, newOrder)
				.then(res => console.log(res))
		} catch (error) {
			console.error(error)
		}
		dispatch(clearCart())
	}
	return (
		<div className={styles.container}>
			<h3>Submit Your Purchase</h3>
			<form className={styles.form} onSubmit={handleSubmitForm}>
				<input
					type='text'
					placeholder='Enter Your Name'
					required
					name='name'
					onChange={handleChangeInput}
				/>
				<input
					type='tel'
					placeholder='Enter Your Phone Number'
					required
					name='phone'
					onChange={handleChangeInput}
				/>
				<input
					type='text'
					placeholder='Enter Your Email'
					required
					name='email'
					onChange={handleChangeInput}
				/>
				<input
					type='text'
					placeholder='Enter Your Address'
					required
					name='address'
					onChange={handleChangeInput}
				/>
				<button type='submit' className={styles.button}>
					Purchase!
				</button>
			</form>
		</div>
	)
}

export default Form
