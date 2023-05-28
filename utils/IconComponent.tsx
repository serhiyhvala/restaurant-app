import { CiIcons } from '@type/CiIcons'
import { FC } from 'react'
import * as Icons from 'react-icons/ci'

interface IIconComponentProps {
	icon: CiIcons
	size?: number
}

const IconComponent: FC<IIconComponentProps> = ({ icon, size = 25 }) => {
	const Component = Icons[icon]
	return <Component size={size} />
}

export default IconComponent
