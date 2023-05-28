import ContentLoader from 'react-content-loader'

const Loader = () => (
	<ContentLoader
		speed={2}
		width={110}
		height={30}
		viewBox='0 0 110 30'
		backgroundColor='#ffd6d6'
		foregroundColor='#ecebeb'
	>
		<rect x='110' y='94' rx='0' ry='0' width='0' height='1' />
		<rect x='40' y='17' rx='0' ry='0' width='0' height='1' />
		<rect x='0' y='0' rx='5' ry='5' width='110' height='30' />
	</ContentLoader>
)

export default Loader
