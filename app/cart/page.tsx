'use client'

import { clearCart } from '@store/slices/cartSlice'
import Button from '@ui/Button'

import CartList from '@components/CartList'
import Form from '@components/Form'

import { useAppDispatch, useAppSelector } from '@hooks/index'

import styles from './cart.module.scss'

const Cart = () => {
	const { cartItems, totalPrice } = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()
	const isCartEmpty = cartItems.length === 0
	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				{isCartEmpty ? (
					<h2>No Items In Cart</h2>
				) : (
					<>
						<Form />
						<CartList />
					</>
				)}
			</div>
			<Button link='/'>Go Home</Button>
		</section>
	)
}

export default Cart
