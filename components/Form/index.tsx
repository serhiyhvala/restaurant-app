'use client'

import { BASE_URL } from '@constants/*'
import { changeTotalPriceWithCoupon, clearCart } from '@store/slices/cartSlice'
import axios from 'axios'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@hooks/index'

import { useGetCouponsQuery } from '@services/index'

import styles from './form.module.scss'

interface IInputData {
	name: string
	email: string
	address: string
	phone: string
}

interface ICouponState {
	coupon: string
	disabled: boolean
}

const Form = () => {
	const { data } = useGetCouponsQuery('/coupons')
	const { cartItems, totalPrice } = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()
	const [inputData, setInputData] = useState<IInputData>({
		name: '',
		email: '',
		address: '',
		phone: ''
	})
	const [couponState, setCouponState] = useState<ICouponState>({
		coupon: '',
		disabled: false
	})
	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setInputData({ ...inputData, [event.target.name]: event.target.value })
	}

	const handleChangeCoupon = (event: ChangeEvent<HTMLInputElement>) => {
		setCouponState({ ...couponState, coupon: event.target.value })
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

	useEffect(() => {
		const coupon = data?.find(item => item.coupon === couponState.coupon)
		if (coupon) {
			dispatch(changeTotalPriceWithCoupon(coupon.discountPercent))
			setCouponState({ ...couponState, disabled: true })
		}
	}, [couponState.coupon, cartItems])
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
				<input
					type='text'
					placeholder='Enter Your Coupon'
					name='coupon'
					disabled={couponState.disabled}
					onChange={handleChangeCoupon}
				/>
				<button type='submit' className={styles.button}>
					Purchase!
				</button>
			</form>
		</div>
	)
}

export default Form
