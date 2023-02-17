import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';

const formStyle = {
	display: 'flex',
	flexDirection: 'column',
	minWidth: 400,
};

const AddNote = ({ getNotes }) => {
	const [note, setNote] = useState({ title: '', description: '' });
	const [form] = Form.useForm();

	const onChangeTitle = (e) => {
		setNote({ ...note, title: e.target.value });
	};

	const onChangeDescription = (e) => {
		setNote({ ...note, description: e.target.value });
	};

	const handleSubmit = async () => {
		const noteItem = {
			title: note.title,
			description: note.description,
		};
		try {
			await axios.post('/notes/', noteItem);
			await getNotes();
			form.resetFields();
		} catch (e) {
			console.error('Server error: ' + e.message);
		}
	};

	return (
		<Form
			form={form}
			onFinish={handleSubmit}
			style={formStyle}
			className='notes-container'
		>
			<Form.Item
				name='title'
				rules={[
					{
						required: true,
						message: 'Please input the title',
					},
				]}
			>
				<Input
					type='text'
					value={note.title}
					placeholder='Title'
					onChange={onChangeTitle}
				/>
			</Form.Item>
			<Form.Item
				name='description'
				rules={[
					{
						required: true,
						message: 'Please input the description',
					},
				]}
			>
				<Input.TextArea
					rows={3}
					value={note.description}
					placeholder='Description'
					onChange={onChangeDescription}
				/>
			</Form.Item>
			<Button type='primary' className='button-border' htmlType='submit'>
				+ Add Note
			</Button>
		</Form>
	);
};

export default AddNote;
