import Button from '~/components/Button'
import Modal, {
	ModalContent,
	ModalFooter,
	ModalTitle,
} from '~/components/Modal'
import Switch from '~/components/Switch'

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
					closeButton={true}
				>
					<ModalTitle>
						<div className="space-y-1">
							<h2 className="font-bold text-gray-900">
								Add a New Flow
							</h2>
							<p className="text-sm font-medium leading-5 text-gray-500">
								<em>
									Flows help you better manage your guides by
									grouping them.
								</em>
							</p>
						</div>
					</ModalTitle>
					<ModalContent>
						<div className="space-y-6">
							<div className="space-y-4">
								<label className="block space-y-2">
									<span className="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600">
										Flow Name
									</span>
									<input
										type="text"
										placeholder="Name your flow"
										className="max-w-md w-full bg-white rounded-md border text-base leading-normal py-2 px-3 border-gray-300 placeholder-gray-400 sm:text-sm sm:leading-5"
									/>
								</label>
								<div className="flex items-center space-x-6">
									<div className="space-y-1">
										<label className="text-sm font-medium leading-5 text-gray-600">
											Flow Start Delay
										</label>
										<div className="relative flex">
											<input
												type="number"
												id="flow-name"
												name="flow-name"
												className="w-0 flex-1 pr-8 bg-white rounded-md border text-base leading-normal py-2 px-3 border-gray-300 rounded text-gray-900 placeholder-gray-400 sm:text-sm sm:leading-5"
											/>
											<div className="absolute inset-y-0 right-0 pr-2 flex items-center">
												<span className="text-sm leading-5 text-gray-500">
													ms
												</span>
											</div>
										</div>
									</div>
									<label className="flex items-center mt-6 space-x-1.5">
										<input
											type="checkbox"
											name="delay-traversable"
											className="form-checkbox rounded text-indigo-500"
										/>
										<span className="flex items-center space-x-1 text-sm leading-5 text-gray-900">
											<span className="text-sm leading-5 text-gray-900">
												Traversable
											</span>
										</span>
									</label>
									<Switch
										className="mt-6"
										title="Enable Reporting"
										onToggle={(d) => console.log(d)}
									></Switch>
								</div>
							</div>
						</div>
					</ModalContent>
					<ModalFooter>
						<button
							type="button"
							className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
						>
							<i className="fas fa-times"></i> Cancel
						</button>
						<button
							type="button"
							className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
						>
							<i className="fas fa-plus"></i> Create
						</button>
					</ModalFooter>
				</Modal>
			)}
		</div>
	)
}
export default About
