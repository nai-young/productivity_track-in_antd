import { Button, Space, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DisplayNote = () => {
	const [note, setNote] = useState({ title: '', description: '' });
	let { note_id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getNote();
	}, []);

	const getNote = async () => {
		const resp = await axios.get(`/notes/${note_id}`);
		setNote({ title: resp.data.title, description: resp.data.description });
	};

	const deleteNote = async () => {
		try {
			await axios.delete(`/notes/${note_id}`);
			navigate(-1);
		} catch (e) {
			console.error(e.message);
		}
	};

	return (
		<Space direction='vertical' style={{ padding: '20px 70px', maxWidth: 800 }}>
			<Space direction='vertical' className='display-note-text'>
				<Typography>{note.title}</Typography>
				<Typography>{note.description}</Typography>
			</Space>
			<Space style={{ marginTop: 20 }}>
				<Button type='primary' className='button-border'>
					<Link to={`/notes/noteedit/${note_id}`}>Edit Note</Link>
				</Button>
				<Button type='primary' className='button-border' onClick={deleteNote}>
					Delete Note
				</Button>
				<Button type='primary' className='button-border'>
					<Link to={'/'}>Home</Link>
				</Button>
			</Space>
		</Space>
	);
};

export default DisplayNote;
