import styles from '@styles/notFound.module.scss'
import Button from '@ui/Button'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Not Found Page :('
}

const NotFound = () => {
	return (
		<div className={styles.error}>
			<h2>Not Found</h2>
			<Button link='/'>Go To Home</Button>
		</div>
	)
}

export default NotFound
