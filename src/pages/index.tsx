import { ParentComponent } from '~/components/ParentComponent'
import { Form } from '~/components/form/Form'
import { formData } from '~/data/formData'

const Index = () => {
    return (
        <div>
			<ParentComponent />
			<Form formData={formData} />
        </div>
    )
}

export default Index