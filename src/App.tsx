import { Suspense } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

import routes from '~react-pages'
import { useDark } from './hooks'

export const App = () => {
	const dark = useDark()
	return (
		<div className="App">
			<button onClick={dark.toggleDark}>Toggle Dark</button>
			<Suspense
				fallback={
					<div className="fixed top-0 h-screen w-screen grid place-items-center">
						Loading...
					</div>
				}
			>
				{useRoutes(routes)}
			</Suspense>
		</div>
	)
}
