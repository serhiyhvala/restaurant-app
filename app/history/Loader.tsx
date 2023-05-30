import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = () => (
	<ContentLoader
		speed={2}
		width={270}
		height={105}
		viewBox='0 0 270 105'
		backgroundColor='#ffd6d6'
		foregroundColor='#ecebeb'
	>
		<rect x='110' y='94' rx='0' ry='0' width='0' height='1' />
		<rect x='40' y='17' rx='0' ry='0' width='0' height='1' />
		<rect x='0' y='0' rx='10' ry='10' width='270' height='105' />
	</ContentLoader>
)

export default Loader
