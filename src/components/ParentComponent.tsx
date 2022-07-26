import { ChildComponent } from './ChildComponent'
import {Form} from "~/components/Form";
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
            <Form/>
			<ChildComponent clickHandler={ClickHandler} />
		</div>
  )
}
