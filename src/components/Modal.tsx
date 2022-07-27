import React, { Fragment, useEffect } from "react";
import Portal from "./Portal";

const Modal = ({ description, explainerText, onCancel, onSubmit }) => {
  useEffect(() => { });
  
  return (
    <Fragment>
		<div onClick={onCancel} className="absolute inset-0 bg-black opacity-15" />
		<Portal className="fixed top-0 h-full w-full backdrop-blur-sm grid place-items-center">
			<div className="relative px-4 flex items-center justify-center">
			<div className="w-full h-full absolute z-10 inset-0" />
			<div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
				<div className="md:flex items-center">
				<div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
					<i className="bx bx-error text-3xl" />
				</div>
				<div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
					<p className="font-bold">Delete your account</p>
					<p className="text-sm text-gray-700 mt-1">
					You will lose all of your data by deleting your account. This
					action cannot be undone.
					</p>
				</div>
				</div>
				<div className="text-center md:text-right mt-4 md:flex md:justify-end">
				<button className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
					Delete Account
				</button>
				<button
					className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
			md:mt-0 md:order-1"
				>
					Cancel
				</button>
				</div>
			</div>
			</div>
		</Portal>	
    </Fragment>
  );
};

export default Modal;
