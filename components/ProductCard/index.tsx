import { Product } from '@type/index'
import Image from 'next/image'
import { FC } from 'react'

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
	price
}) => {
	const isMassExist = mass ? <p>{mass}</p> : ''
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
					<button className={styles.button}>Add to cart</button>
					<button className={styles.button}>{price} UAH</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
