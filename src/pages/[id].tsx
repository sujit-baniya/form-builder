import { RTable } from '~/components/RTable'

export const Hi = (props) => {
	const { id } = useParams()
	return (
		<div>
			<h1>Hi {id}</h1>
			<RTable></RTable>
		</div>
	)
}
export default Hi
