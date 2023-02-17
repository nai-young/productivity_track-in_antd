import React from 'react';
import { Link } from 'react-router-dom';
// icons
import {
	CalendarOutlined,
	ClockCircleOutlined,
	CommentOutlined,
	DashboardOutlined,
	PhoneOutlined,
} from '@ant-design/icons';

const menu = [
	{ link: '/', icon: <DashboardOutlined /> },
	{ link: '/calendar', icon: <CalendarOutlined /> },
	{ link: '/tracker', icon: <ClockCircleOutlined /> },
	{ link: '/support', icon: <CommentOutlined /> },
	{ link: '/contact', icon: <PhoneOutlined /> },
];

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<ul>
				{menu.map((item, i) => (
					<li key={i}>
						<Link to={item.link} style={{ color: '#000000' }}>
							{item.icon}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
