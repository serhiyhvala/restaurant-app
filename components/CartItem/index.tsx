import { addItemsToCart, decrementCount } from '@store/slices/cartSlice'
import { Product } from '@type/index'
import Image from 'next/image'
import { FC } from 'react'

import { useAppDispatch } from '@hooks/index'

import styles from './cartItem.module.scss'

interface ICartItemProps extends Product {
	count: number
}

const CartItem: FC<ICartItemProps> = props => {
	const { image, title, count, _id } = props
	const dispatch = useAppDispatch()
	return (
		<div className={styles.cartItem}>
			<Image src={image} alt={title} width={120} height={120} />
			<div className={styles.text}>
				<h2>{title}</h2>
				<div className={styles.cartButtons}>
					<p onClick={() => dispatch(decrementCount(_id))}>-</p>
					<span>{count}</span>
					<p onClick={() => dispatch(addItemsToCart({ ...props }))}>+</p>
				</div>
			</div>
		</div>
	)
}

export default CartItem
