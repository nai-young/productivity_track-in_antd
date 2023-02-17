import { Button } from 'antd';
import React from 'react';

const DurationTime = ({ durationTime, onUpDuration, onDownDuration }) => {
	function upDuration() {
		if (durationTime === 60) return;
		onUpDuration();
	}
	function downDuration() {
		if (durationTime === 1) return;
		onDownDuration();
	}

	return (
		<section className='duration-section'>
			<h3>Session Duration</h3>
			<Button type='primary' className='button-border' onClick={upDuration}>
				UP
			</Button>
			<p className='time'>{durationTime}</p>
			<Button type='primary' className='button-border' onClick={downDuration}>
				DOWN
			</Button>
		</section>
	);
};

export default DurationTime;
