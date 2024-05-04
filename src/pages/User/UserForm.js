import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Modal from "react-modal";

const UserForm = ({ onSubmit }) => {
	const { register, handleSubmit, formState: {errors} } = useForm();

	const submitHandler = (data) => {
		onSubmit(data);
	};

	const [modalIsOpen, setModalIsOpen] = useState(false);


	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};
	const modalContent = (
		<div>
			<h2>ПОЛЬЗОВАТЕТЬ УСПЕШНО СОЗДАН</h2>
			<button onClick={closeModal}>Закрыть</button>
		</div>
	);


	return (
		<form onSubmit={handleSubmit(submitHandler)} className="inputForm">
			<input className="input" type="text" placeholder="Name" {...register('name', {required:true})} />
			<input className="input" type="text" placeholder="Username" {...register('username', {required:true})} />
			<input className="input" type="text" placeholder="Email" {...register('email', {required:true})} />
			<button className="submitBtn" type="submit" onClick={openModal}>CREATE</button>
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
				{modalContent}
			</Modal>
		</form>
	);
};

export default UserForm;
