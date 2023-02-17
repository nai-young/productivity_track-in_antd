import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
// components
import Dashboard from 'components/Dashboard';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import DisplayNote from 'components/Notes/DisplayNote';
import EditTodo from 'components/Todos/EditTodo';
import EditNote from 'components/Notes/EditNote';
import CalendarApp from 'components/Calendar';
import Contact from 'components/Contact';
const { Content } = Layout;
const contentStyle = {
	paddingTop: 20,
};
function App() {
	return (
		<Router>
			<Header />
			<Sidebar />
			<Content style={contentStyle}>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/todoedit/:todo_id' element={<EditTodo />} />
					<Route path='/notes/:note_id' element={<DisplayNote />} />
					<Route path='/notes/noteedit/:note_id' element={<EditNote />} />
					<Route path='/calendar' element={<CalendarApp />} />
					<Route path='/contact' element={<Contact />} />
					{/*
					<Route path='/tracker' element={<Tracker />} />
					<Route path='/support' element={<Support />} />
					 */}
				</Routes>
			</Content>
		</Router>
	);
}

export default App;
