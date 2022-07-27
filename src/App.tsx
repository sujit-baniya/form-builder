import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'

import routes from '~react-pages'

export const App = () => {
	return (
		<div className="App">
			<Suspense fallback={<p>Loading...</p>}>
				{useRoutes(routes)}
			</Suspense>
		</div>
	)
}
