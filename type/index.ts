import { CiIcons } from '@type/CiIcons'

export interface Category {
	_id: string
	title: string
	icon: CiIcons
	slug: string
}

export interface Product {
	_id: string
	title: string
	description: string
	price: number
	image: string
	mass?: string
	category: string
	slug: string
}
