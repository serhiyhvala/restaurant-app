import { clearCart } from '@store/slices/cartSlice'

import CartItem from '@components/CartItem'

import { useAppDispatch, useAppSelector } from '@hooks/index'

import styles from './cartList.module.scss'

const CartList = () => {
	const { cartItems, totalPrice } = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()
	return (
		<div className={styles.cart}>
			{cartItems.map(item => (
				<CartItem key={item._id} {...item} />
			))}
			<div className={styles.buttons}>
				<div>Total Price: {totalPrice}</div>
				<div onClick={() => dispatch(clearCart())} className={styles.button}>
					Clear Cart
				</div>
			</div>
		</div>
	)
}

export default CartList
