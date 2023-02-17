import { Button, Form, Input, Select } from 'antd';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const formStyle = {
	display: 'flex',
	justifyContent: 'space-between',
};

const AddTodo = ({ getTodos }) => {
	const [todo, setTodo] = useState({ title: '', priority: '', completed: '' });
	const [form] = Form.useForm();

	const submitTodo = async () => {
		const todoItem = {
			title: todo.title,
			priority: todo.priority,
			completed: todo.completed,
		};
		try {
			await axios.post('/todos/', todoItem);
			await getTodos();
			form.resetFields();
		} catch (e) {
			console.error('Server error: ' + e.message);
		}
	};

	const onChangeTitle = (e) => {
		setTodo({ ...todo, title: e.target.value.trim() });
	};
	const onChangePriority = (value) => {
		setTodo({ ...todo, priority: value });
	};

	return (
		<Form
			form={form}
			onFinish={submitTodo}
			autoComplete='off'
			style={formStyle}
      className="todos-container"
		>
			<Form.Item
				name='title'
				rules={[
					{
						required: true,
						message: 'Please input the title',
					},
				]}
				style={{ width: '100%' }}
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
			<Button type='primary' className='button-border' htmlType='submit'>
				+ New
			</Button>
		</Form>
	);
};

export default AddTodo;
