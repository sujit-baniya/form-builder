import React, { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import { Icon } from '@iconify/react'

const Portal = ({ children }) => {
	return ReactDom.createPortal(children, document.body)
}

export const ModalTitle = ({ children }) => {
	return (
		<div className="px-8 pt-6 pb-4 w-full">
			{children}
		</div>
	)
};
export const ModalContent = ({ children }) => {
	return (
		<div className="px-8 py-6 w-full">
			{children}
		</div>
	)
};
export const ModalFooter = ({ children }) => {
	return (
		<div className="bg-gray-200 px-4 py-3 text-right absolute bottom-0 w-full">
			{children}
		</div>
	)
};

const CloseButton = ({onClose, closeButton}) => {
	if (closeButton) {
		return (
			<button
				className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center"
				onClick={onClose}
			>
				<Icon
					icon="carbon:close-filled"
					className="h-5 w-5"
				/>
			</button>
		)
	}
	return (<div></div>)
}

const find = component => ({
	in: element => React.Children.toArray(element).filter(
		({ type }) => type === component
	)
});

const extract = map => ({
  from: element => Object.entries(map).reduce(
    (stack, [key, value]) => Object.assign(stack, { [key]: find(value).in(element) }),
    {}
  )
})

const Modal = ({ children, isOpen, onClose, closeOnBackgroundClick, closeButton }) => {
	closeButton = closeButton || false
	const { title, content, footer } = extract({
    title: ModalTitle,
    content: ModalContent,
    footer: ModalFooter
  }).from(children);
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
					className={`fixed z-[1000] ${wrapperClasses()} overflow-hidden flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm`}
					onClick={checkOutsideAndCloseModal}
				>
					<div
						ref={modalRef}
						className={`absolute max-w-[500px] max-h-[400px] overflow-auto transition ease-in-out delay-150 duration-300 ${modalClasses()} bg-white rounded-xl z-[1000] shadow-lg w-full h-full`}
					>
						<CloseButton onClose={onClose} closeButton={closeButton} />
						{title}
						{content}
						{footer}
					</div>
				</div>
			</Portal>
		</>
	)
}

export default Modal
