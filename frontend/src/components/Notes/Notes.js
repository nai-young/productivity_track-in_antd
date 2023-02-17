import { Space } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddNote from './AddNote';
import ListNotes from './ListNotes';

const Notes = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		getNotes();
	}, []);

	const getNotes = async () => {
		try {
			const resp = await axios.get('/notes');
			setNotes(resp.data);
		} catch (e) {
			console.error(e.message);
		}
	};

	return (
		<section className='card card-notes'>
			<h2>Notes</h2>
			<Space
				size='large'
				align='start'
				style={{ padding: '20px 10px' }}
				className='notes-space-container'
			>
				<AddNote getNotes={getNotes} />
				<ListNotes notes={notes} />
			</Space>
		</section>
	);
};

export default Notes;
