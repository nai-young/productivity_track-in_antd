import { Button } from 'antd';
import React from 'react';

const BreakTime = ({ breakTime, onUpBreak, onDownBreak }) => {
	function upBreak() {
		if (breakTime === 60) return;
		onUpBreak();
	}
	function downBreak() {
		if (breakTime === 1) return;
		onDownBreak();
	}

	return (
		<section className='break-section'>
			<h3>Break Time</h3>
			<Button type='primary' className='button-border' onClick={upBreak}>
				UP
			</Button>
			<p className='time'>{breakTime}</p>
			<Button type='primary' className='button-border' onClick={downBreak}>
				DOWN
			</Button>
		</section>
	);
};

export default BreakTime;
