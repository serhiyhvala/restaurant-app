import { Providers } from '@providers/index'
import '@styles/globals.css'

import Header from '@components/Header'

export const metadata = {
	title: 'Restaurant App'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	)
}
