import { Fragment, useState } from 'react'
import {
	PencilAltIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ClipboardCopyIcon,
	TrashIcon,
	DownloadIcon,
	CogIcon,
	SearchIcon,
} from '@heroicons/react/outline'
import { ExclamationIcon } from '@heroicons/react/solid'
import { toTitleCase } from '~/helpers/string'
import { extract } from '~/helpers/react-helper'

export const RTr = ({ children, scope }) => {
	return (
		<Fragment>
			<tr
				className={
					`transition-all odd:bg-gray-50 even:bg-gray-100` + scope ===
					'data'
						? ' hover:bg-white'
						: ''
				}
			>
				{children}
			</tr>
		</Fragment>
	)
}

export const RTh = ({ children, scope, sortBy, className }) => {
	const [field, setField] = useState('')
	const [direction, setDirection] = useState('')
	const changeOrder = () => {
		if (direction === 'asc') {
			setDirection('desc')
		} else if (direction === 'desc') {
			setDirection('normal')
		} else {
			setDirection('asc')
		}
	}
	useEffect(() => {
		if (sortBy) {
			let sort = sortBy.split(' ')
			setField(sort[0])
			if (sort.length === 2) {
				setDirection(sort[1])
			}
		} else {
			setDirection('')
		}
	})
	return (
		<Fragment>
			<th
				className={`sticky float-left px-2 py-2 text-xs font-medium tracking-wider text-left uppercase bg-white whitespace-nowrap`}
			>
				{children}
			</th>
		</Fragment>
	)
}

export const RTd = ({ children }) => {
	return (
		<Fragment>
			<tr className={`sticky px-2 py-1 whitespace-nowrap align-top pt-1`}>
				{children}
			</tr>
		</Fragment>
	)
}

export const TableTitle = ({ title }) => {
	return (
		<h1 className="text-2xl font-semibold whitespace-nowrap pl-2 pt-2">
			{{ title }}
		</h1>
	)
}

export const Download = ({ rows, title }) => {
	return <h1>Download</h1>
}

export const TableButtons = ({ buttons, rows, title }) => {
	return (
		<div className="flex items-center">
			<ul className="flex flex-row space-x-1 pr-2" v-if="tableRows">
				<li>
					<button
						type="button"
						className="m-1 p-1 flex justify-center items-center bg-gray-200 text-gray-500 hover:bg-gray-300 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow focus:outline-none focus:ring-0 focus:ring-offset-2 rounded"
					>
						<Download rows={rows} fileName={title}>
							<DownloadIcon className="h-4 w-4 cursor-pointer mt-1" />
						</Download>
					</button>
				</li>
			</ul>
			<ul className="flex flex-row space-x-1">
				<li>
					<button
						type="button"
						className="mr-1 py-2 px-2 flex justify-center items-center bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
					>
						<TrashIcon className="h-4 w-4" />
					</button>
				</li>
				<li>
					<button
						type="button"
						className="mr-1 py-2 px-2 flex justify-center items-center bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
					>
						<ClipboardCopyIcon className="h-4 w-4" />
					</button>
				</li>
				<li>
					<button
						type="button"
						className="mr-1 py-2 px-2 flex justify-center items-center bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
					>
						<CogIcon className="h-4 w-4" />
					</button>
				</li>
			</ul>
			{buttons}
		</div>
	)
}

export const TableFilters = ({ filters }) => {
	return (
		<div className="flex items-center overflow-x-auto whitespace-nowrap">
			{filters}
		</div>
	)
}

export const TableActions = ({ children, rows, title }) => {
	const { buttons, filters } = extract({
		buttons: TableButtons,
		filters: TableFilters,
	}).from(children)
	return (
		<section className="flex justify-between px-2 py-3 mb-2 text-gray-700 font-montserrat text-sm">
			{buttons}
			{filters}
		</section>
	)
}

export const RTable = () => {
	return (
		<div>
			<div className="grid grid-cols-1 overflow-x-auto whitespace-nowrap p-2 slim-scrollbar">
				<table className="px-5 py-2 w-full divide-y divide-gray-200 bg-gray-50 text-sm table">
					<thead className="bg-gray-50">
						<tr className="transition-all odd:bg-gray-50 even:bg-gray-100 w-full">
							<RTh className="checkbox-th">
								<div>
									<input
										type="checkbox"
										v-model="setting.isCheckAll"
									/>
								</div>
							</RTh>
						</tr>
					</thead>
					<tbody
						v-if="localRows.length > 0"
						className="w-full"
					></tbody>
				</table>
			</div>
		</div>
	)
}
