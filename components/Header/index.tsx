'use client'

import Image from 'next/image'
import Link from 'next/link'

import Loader from '@components/Header/Loader'

import { useGetCategoriesQuery } from '@services/index'

import IconComponent from '@utils/IconComponent'

import styles from './header.module.scss'

const Header = () => {
	const { data, isLoading } = useGetCategoriesQuery('/categories')
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
						: data?.map(item => (
								<li key={item._id}>
									<Link href={item.slug} className={styles.link}>
										<IconComponent icon={item.icon} />
										{item.title}
									</Link>
								</li>
						  ))}
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
