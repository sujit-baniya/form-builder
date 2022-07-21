import React from 'react'
import { ChildComponent } from './ChildComponent'
export const ParentComponent = () => {
  const nameList = ['Sujit', 'Anita', 'Alishma', 'Sanvi']
  const ClickHandler = (childName: string) => {
    alert(`Clicked! ${childName}`)
  }
  return (
		<div>
			{nameList.map((name) => {
				return (
					<h2 key={name} className="text-2xl">
						{name}
					</h2>
				)
			})}
			<div className="flex justify-center -space-x-3 font-mono text-white text-sm font-bold leading-6">
				<div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-40 dark:ring-slate-900">
					05
				</div>
				<div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-45 dark:ring-slate-900">
					04
				</div>
				<div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-20 dark:ring-slate-900">
					03
				</div>
				<div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-10 dark:ring-slate-900">
					02
				</div>
				<div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-0 dark:ring-slate-900">
					01
				</div>
			</div>
			<ChildComponent clickHandler={ClickHandler} />
		</div>
  )
}
