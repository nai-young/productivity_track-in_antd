import { RightOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const ListNotes = ({ notes }) => {
	return (
		<ul>
			{notes && notes.length > 0 ? (
				notes.map((note) => {
					return (
						<li
							key={note._id}
							style={{
								listStyle: 'none',
								marginBottom: 10,
								display: 'flex',
								alignItems: 'center',
								gap: 10,
							}}
						>
							<RightOutlined />{' '}
							<Typography style={{fontSize: 16}}>
								<Link to={`/notes/${note._id}`}>{note.title}</Link>
							</Typography>
						</li>
					);
				})
			) : (
				<p>No note(s) left</p>
			)}
		</ul>
	);
};

export default ListNotes;
