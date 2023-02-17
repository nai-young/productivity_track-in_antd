import { Button, Form, Input, Select, Space } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const formStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	maxWidth: 600,
	padding: '30px 70px',
};

const EditTodo = () => {
	const [todo, setTodo] = useState({ title: '', priority: '' });
	let { todo_id } = useParams();
	const [form] = Form.useForm();
	const navigate = useNavigate();

	useEffect(() => {
		getTodo();
	}, []);

	useEffect(() => {
		form.setFieldsValue(todo);
	}, [form, todo]);


	const getTodo = async () => {
		const resp = await axios.get('/todos/' + todo_id);
		const isEmpty = resp.data.title === '' || resp.data.priority === '';
		!isEmpty &&
			setTodo({
				title: resp.data.title,
				priority: resp.data.priority,
			});
	};

	const onChangeTitle = (e) => {
		setTodo({
			...todo,
			title: e.target.value,
		});
	};
	const onChangePriority = (value) => {
		setTodo({
			...todo,
			priority: value,
		});
	};

	const handleSubmit = async () => {
		const todoItem = {
			title: todo.title,
			priority: todo.priority,
		};
		try {
			await axios.put('/todos/todoedit/' + todo_id, todoItem);
			navigate(-1);
		} catch (e) {
			console.error('Server error: ' + e.message);
		}
	};

	return (
		<div>
			<h2>Edit Todo</h2>
			<Form
				form={form}
				onFinish={handleSubmit}
				autoComplete='off'
				style={formStyle}
				initialValues={todo}
			>
				<Form.Item
					name='title'
					rules={[
						{
							required: true,
							message: 'Please input the title',
						},
					]}
					style={{ minWidth: 300 }}
				>
					<Input
						type='text'
						placeholder='Enter title...'
						value={todo.title}
						onChange={onChangeTitle}
					/>
				</Form.Item>
				<Form.Item
					name='priority'
					rules={[
						{
							required: true,
							message: 'Please select the priority',
						},
					]}
					style={{ margin: '0 10px' }}
				>
					<Select
						placeholder='Priority'
						style={{ minWidth: 100 }}
						onChange={onChangePriority}
					>
						<Select.Option value='Low'>Low</Select.Option>
						<Select.Option value='Medium'>Medium</Select.Option>
						<Select.Option value='Urgent'>Urgent</Select.Option>
					</Select>
				</Form.Item>
				<Space align='start'>
					<Button type='primary' className='button-border' htmlType='submit'>
						Edit
					</Button>
					<Button
						type='primary'
						className='button-border'
						onClick={() => navigate(-1)}
					>
						Cancel
					</Button>
				</Space>
			</Form>
		</div>
	);
};

export default EditTodo;
