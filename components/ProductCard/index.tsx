import { addItemsToCart } from '@store/slices/cartSlice'
import { Product } from '@type/index'
import Image from 'next/image'
import { FC } from 'react'

import { useAppDispatch } from '@hooks/index'

import { cropText } from '@utils/cropText'

import styles from './productCard.module.scss'

interface IProductCardProps extends Product {}

const ProductCard: FC<IProductCardProps> = ({
	category,
	description,
	mass,
	image,
	slug,
	title,
	price,
	_id
}) => {
	const dispatch = useAppDispatch()
	const isMassExist = mass ? <p>{mass}</p> : ''
	const addToCart = () => {
		const newItem = {
			category,
			description,
			mass,
			image,
			slug,
			title,
			price,
			_id
		}
		dispatch(addItemsToCart(newItem))
	}
	return (
		<div className={styles.card}>
			<Image
				src={image}
				alt={title}
				width={350}
				height={350}
				className={styles.img}
				draggable={false}
			/>
			<div className={styles.text}>
				<div className={styles.mass}>
					<h3>{title}</h3>
					{isMassExist}
				</div>
				<p>{cropText(description)}</p>
				<div className={styles.buttons}>
					<button className={styles.button} onClick={addToCart}>
						Add to cart
					</button>
					<button className={styles.price}>{price} UAH</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
