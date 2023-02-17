import { Button, Form, Input, Space, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditNote = () => {
	const [note, setNote] = useState({ title: '', description: '' });
	let { note_id } = useParams();
	const [form] = Form.useForm();
  const navigate = useNavigate()

	useEffect(() => {
		getNote();
	}, []);

	useEffect(() => {
		form.setFieldsValue(note);
	}, [form, note]);

	const getNote = async () => {
		try {
			const resp = await axios.get(`/notes/${note_id}`);
			setNote({
				title: resp.data.title,
				description: resp.data.description,
			});
		} catch (e) {
			console.error(e.message);
		}
	};

	const onChangeTitle = (e) => {
		setNote({
			...note,
			title: e.target.value,
		});
	};

	const onChangeDesc = (e) => {
		setNote({
			...note,
			description: e.target.value,
		});
	};

	const handleSubmit = async () => {
		const noteItem = {
			title: note.title,
			description: note.description,
		};
		try {
			await axios.put(`/notes/noteedit/${note_id}`, noteItem);
      navigate(-1)
		} catch (e) {
			console.error('Server error: ' + e.message);
		}
	};

	return (
		<div style={{padding: "20px 70px", maxWidth: 800}}>
			<h1>Edit Note</h1>
			<Form
				form={form}
				onFinish={handleSubmit}
        style={{marginTop: 20}}
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
					<Input value={note.title} onChange={onChangeTitle} />
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
						rows={6}
						value={note.description}
						id='description'
						onChange={onChangeDesc}
					/>
				</Form.Item>
				<Space>
					<Button type='primary' className='button-border' htmlType='submit'>
						Save
					</Button>
					<Link to={`/notes/${note_id}`}>
						<Button type='primary' className='button-border'>
							Back
						</Button>
					</Link>
				</Space>
			</Form>
		</div>
	);
};

export default EditNote;
