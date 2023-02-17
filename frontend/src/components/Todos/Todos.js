import { Button, Space } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddTodo from './AddTodo';

const Todos = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		getTodos();
	}, []);

	const getTodos = async () => {
		axios
			.get('/todos/')
			.then((res) => {
				setTodos(res.data);
			})
			.catch((error) => console.error('Server error: ' + error.message));
	};

	const deleteTodo = (id) => {
		axios
			.delete(`/todos/${id}`)
			.then((res) => {
				if (res.data) {
					getTodos();
				}
			})
			.catch((error) => console.error('Server error: ' + error.message));
	};

	return (
		<section className='card' style={{ flex: '0 0 47%' }}>
			<h2>To-Do List</h2>
			<section style={{ padding: '20px 10px' }}>
				<AddTodo getTodos={getTodos} />
				<Space direction='vertical' style={{ width: '100%' }}>
					{todos?.length > 0 ? (
						todos.map((todo) => {
							return (
								<Space
									size='large'
									key={todo._id}
                  className="todo-item-space"
								>
									<li
										onClick={() => deleteTodo(todo._id)}
										className='todo-item'
									>
										{todo.title} | {todo.priority}
									</li>
									<Link to={'/todoedit/' + todo._id} className='w-1/6'>
										<Button type='primary' className='button-border'>
											Edit
										</Button>
									</Link>
								</Space>
							);
						})
					) : (
						<p>No todo(s) left</p>
					)}
				</Space>
			</section>
		</section>
	);
};

export default Todos;
