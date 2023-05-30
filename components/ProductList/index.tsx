'use client'

import { getAllProducts } from '@store/slices/productsSlice'
import styles from '@styles/home.module.scss'
import { Product } from '@type/index'
import { useEffect, useState } from 'react'

import ProductCard from '@components/ProductCard'
import Loader from '@components/ProductList/Loader'

import { useAppDispatch, useAppSelector } from '@hooks/index'

const ProductList = () => {
	const {
		products: items,
		loading,
		category
	} = useAppSelector(state => state.product)
	const [products, setProducts] = useState<Product[]>(items)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getAllProducts())
	}, [dispatch])

	useEffect(() => {
		const filteredProjects =
			category === '' ? items : items.filter(item => item.category === category)
		setProducts(filteredProjects)
	}, [items, category])

	return (
		<section className={styles.container}>
			{loading
				? new Array(20)
						.fill(null)
						.map(item => <Loader key={Math.random() * 100} />)
				: products.map(item => <ProductCard key={item._id} {...item} />)}
		</section>
	)
}

export default ProductList
