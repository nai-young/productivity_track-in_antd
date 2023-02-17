import { RightOutlined, StarFilled } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<Space direction='vertical' style={{ padding: '20px 70px' }}>
			<Space align='center'>
				<RightOutlined style={{ fontSize: 12 }} />
				<Link to='https://naicheyoung.com'>naicheyoung.com</Link>
			</Space>
			<Space align='center'>
				<RightOutlined style={{ fontSize: 12 }} />
				<Link to='mailto:contact@naicheyoung.com'>contact@naicheyoung.com</Link>
			</Space>
			<Space>
				<RightOutlined style={{ fontSize: 12 }} />
				<p>Naiche L. Young</p>
			</Space>
		</Space>
	);
};

export default Contact;
