import React from 'react';
import Notes from './Notes/Notes';
import Pomodoro from './Pomodoro/Pomodoro';
import Todos from './Todos/Todos';

const contentStyle = {
  padding: "20px 80px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}

const Dashboard = () => {
	return (
		<div className="dashboard"  style={contentStyle}>
			<Pomodoro />
			<Todos />
      <Notes/>
		</div>
	);
};

export default Dashboard;
