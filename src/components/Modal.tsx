import React, { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import { Icon } from '@iconify/react'

const Portal = ({ children }) => {
	return ReactDom.createPortal(children, document.body)
}

const Modal = ({ children, isOpen, onClose, closeOnBackgroundClick }) => {
	closeOnBackgroundClick = closeOnBackgroundClick || false
	const modalRef = useRef()

	useEffect(() => {
		if (!isOpen) return
		window.addEventListener('keydown', checkEscAndCloseModal)
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'auto'
			window.removeEventListener('keydown', checkEscAndCloseModal)
		}
	}, [isOpen])

	const checkEscAndCloseModal = (e) => {
		if (e.key !== 'Escape') return
		onClose()
	}

	const checkOutsideAndCloseModal = (e) => {
		if (modalRef.current.contains(e.target)) return
		if (closeOnBackgroundClick) {
			onClose()
		}
	}

	const wrapperClasses = () => {
		if (isOpen) return 'top-0 left-0 bottom-0 right-0'
		return 'w-0 h-0'
	}
	const modalClasses = () => {
		if (!isOpen) return 'opacity-0 translate-y-[80px]'
		return 'opacity-100'
	}

	return (
		<>
			<Portal>
				<div
					className={`fixed z-[1000] ${wrapperClasses()} overflow-hidden flex items-center justify-center bg-black bg-opacity-30`}
					onClick={checkOutsideAndCloseModal}
				>
					<div
						ref={modalRef}
						className={`absolute max-w-[500px] max-h-[400px] overflow-auto transition duration-500 ease-out ${modalClasses()} bg-white z-[1000] rounded-sm shadow-lg w-full h-full`}
					>
						<button
							className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
							onClick={onClose}
						>
							<Icon
								icon="carbon:close-filled"
								className="h-5 w-5"
							/>
						</button>
						{children}
					</div>
				</div>
			</Portal>
		</>
	)
}

export default Modal
