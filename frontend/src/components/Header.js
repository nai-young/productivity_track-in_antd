import React from 'react';
import logo from '../images/logo.png';
import { Layout, Space } from 'antd';
import "../App.css"

const { Header: AntdHeader } = Layout;

const Header = () => {
	return (
		<AntdHeader className='header-container'>
			<img src={logo} alt='Productivity App' width='50px' />
			<h1>Track-In</h1>
		</AntdHeader>
	);
};

export default Header;
