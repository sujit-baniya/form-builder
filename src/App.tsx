import { ParentComponent } from './components/ParentComponent'
import { Form } from '~/components/form/Form'
import { formData } from '~/data/formData'
export const App = () => {
	return (
		<div className="App">
			<ParentComponent />
			<Form formData={formData} />
		</div>
	)
}
