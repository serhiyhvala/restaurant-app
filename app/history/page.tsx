'use client'

import { getOrdersHistory } from '@store/slices/historySlice'
import Button from '@ui/Button'
import Image from 'next/image'
import { FormEvent, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@hooks/index'

import Loader from './Loader'
import styles from './history.module.scss'

const History = () => {
	const { ordersHistory, loading } = useAppSelector(state => state.history)
	const [email, setEmail] = useState('')
	const dispatch = useAppDispatch()
	const isHistoryExist = ordersHistory.length > 0

	const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setEmail('')
		dispatch(getOrdersHistory(email))
	}

	return (
		<section className={styles.container}>
			<h2>Get Your Order History By Email</h2>
			<form className={styles.form} onSubmit={handleSubmitForm}>
				<input
					type='email'
					placeholder='Enter Your Email'
					required
					onChange={event => setEmail(event.target.value)}
					value={email}
				/>
				<button type='submit'>Get Your History</button>
			</form>
			{loading ? (
				<Loader />
			) : !isHistoryExist ? (
				<h3>You dont have any orders</h3>
			) : (
				ordersHistory.map(item => (
					<div className={styles.history} key={item._id}>
						{item.orders.map(history => (
							<div key={history._id} className={styles.order}>
								<div>
									<Image
										src={history.image}
										alt={history.title}
										width={200}
										height={100}
										className={styles.image}
									/>
								</div>
								<div className={styles.text}>
									<span>{history.title}</span>
									<span>{history.count > 1 ? `${history.count}x` : ''}</span>
								</div>
							</div>
						))}
						<span>Total Price: {item.totalPrice}</span>
					</div>
				))
			)}
			<Button link='/'>Go Home</Button>
		</section>
	)
}

export default History
