import Link from 'next/link'
import { FC, HTMLProps, ReactNode } from 'react'

import styles from './button.module.scss'

interface ButtonProps {
	children: ReactNode
	link: string
}

const Button: FC<ButtonProps> = ({ children, link }) => {
	return (
		<Link href={link} className={styles.button}>
			{children}
		</Link>
	)
}

export default Button
