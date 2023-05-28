'use client'

import { setNewCategory } from '@store/slices/productsSlice'
import Image from 'next/image'
import Link from 'next/link'

import Loader from '@components/Header/Loader'

import { useAppDispatch, useAppSelector } from '@hooks/index'

import { useGetCategoriesQuery } from '@services/index'

import IconComponent from '@utils/IconComponent'

import styles from './header.module.scss'

const Header = () => {
	const { data, isLoading } = useGetCategoriesQuery('/categories')
	const { category } = useAppSelector(state => state.product)
	const dispatch = useAppDispatch()
	return (
		<header className={styles.wrapper}>
			<div className={styles.header}>
				<Link href='/'>
					<Image
						src='/logo.svg'
						alt='Food'
						width={100}
						height={50}
						draggable={false}
					/>
				</Link>
				<ul className={styles.menu}>
					{isLoading
						? new Array(4).fill(null).map(item => <Loader />)
						: data?.map(item => {
								const isActive = category === item.slug ? styles.active : ''
								return (
									<li
										key={item._id}
										className={`${styles.link} ${isActive}`}
										onClick={() => dispatch(setNewCategory(item.slug))}
									>
										<IconComponent icon={item.icon} />
										{item.title}
									</li>
								)
						  })}
				</ul>
				<div className={styles.cart}>
					<Link href='/'>
						<IconComponent icon='CiShoppingCart' size={30} />
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header