import { Space } from 'antd';
import React, { useState } from 'react';
import BreakTime from './BreakTime';
import DurationTime from './DurationTime';
import Timer from './Timer';

const Pomodoro = () => {
	const [time, setTime] = useState({
		breakTime: 5,
		durationTime: 25,
		sessionMinutes: 25,
	});

	function onUpBreak() {
		setTime({ ...time, breakTime: time.breakTime + 1 });
	}

	function onDownBreak() {
		setTime({ ...time, breakTime: time.breakTime - 1 });
	}
	function onUpDuration() {
		setTime({
			...time,
			durationTime: time.durationTime + 1,
			sessionMinutes: time.sessionMinutes + 1,
		});
	}

	function onDownDuration() {
		setTime({
			...time,
			durationTime: time.durationTime - 1,
			sessionMinutes: time.sessionMinutes - 1,
		});
	}
	function onUpdateSessionMinutes() {
		setTime({
			...time,
			sessionMinutes: time.sessionMinutes - 1,
		});
	}

	function onToggle(session) {
		setTime({
			...time,
			sessionMinutes: session ? time.durationTime : time.breakTime,
		});
	}

	function onReloadTimer() {
		setTime({
			...time,
			sessionMinutes: time.durationTime,
		});
	}

	return (
		<section className='card' style={{ flex: '0 0 47%' }}>
			<h2>Pomodoro Timer</h2>
			<Space
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '20px 10px',
				}}
				align='start'
        className='pomodoro-timer'
			>
				<DurationTime
					durationTime={time.durationTime}
					onUpDuration={onUpDuration}
					onDownDuration={onDownDuration}
				/>
				<Timer
					sessionMinutes={time.sessionMinutes}
					breakTime={time.breakTime}
					onUpdateSessionMinutes={onUpdateSessionMinutes}
					onToggle={onToggle}
					onReloadTimer={onReloadTimer}
				/>
				<BreakTime
					breakTime={time.breakTime}
					onUpBreak={onUpBreak}
					onDownBreak={onDownBreak}
				/>
			</Space>
		</section>
	);
};

export default Pomodoro;
