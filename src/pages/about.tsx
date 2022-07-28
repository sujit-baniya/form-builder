import Button from '~/components/Button'
import Modal from '~/components/Modal'

export const About = () => {
	const [showModal, setShowModal] = useState(false)
	const handleShowModal = useCallback(() => {
		setShowModal(!showModal)
	}, [showModal])
	const handleCloseModal = useCallback(() => {
		setShowModal(false)
	}, [])
	return (
		<div>
			<Button onClick={handleShowModal}>Show Modal {showModal}</Button>
			{showModal && (
				<Modal
					className="bg-white text-black"
					isOpen={showModal}
					onClose={() => setShowModal(false)}
				>
					<h1>This is test</h1>
				</Modal>
			)}
		</div>
	)
}
export default About
