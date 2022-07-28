import { useState } from 'react'

const Switch = ({ switchedOn, className, title, onToggle }) => {
	switchedOn = switchedOn || true
	const [toggle, setToggle] = useState(switchedOn)
	useEffect(() => {
		onToggle(toggle)
	}, [toggle])
	return (
		<div
			className={`flex justify-between space-x-1 grid place-items-center cursor-pointer ${className}`}
			onClick={() => {
				setToggle(!toggle)
			}}
		>
			<div
				className={
					'md:w-10 h-4 w-9 flex items-center rounded-full ' +
					(!toggle ? ' bg-gray-300' : ' bg-blue-400')
				}
				onClick={() => {
					setToggle(!toggle)
				}}
			>
				<div
					className={
						'bg-white md:w-6 md:h-6 h-5 w-5 rounded-full border border-gray-200 shadow-md transform duration-300 ease-in-out' +
						(!toggle ? '' : ' transform translate-x-4')
					}
				></div>
			</div>
			<span className="text-sm">{title}</span>
		</div>
	)
}

export default Switch
