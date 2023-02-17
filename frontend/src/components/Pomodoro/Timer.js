import { Button, Space } from 'antd';
import React, { useEffect, useState } from 'react';

const Timer = ({
	sessionMinutes,
	breakTime,
	onUpdateSessionMinutes,
	onToggle,
	onReloadTimer,
}) => {
	const [session, setSession] = useState(true);
	const [sessionStart, setSessionStart] = useState(false);

	const [time, setTime] = useState({
		sessionSeconds: 0,
		intervalTime: 0,
	});

	function startTimer() {
		setSessionStart(true);
	}

	function stopTimer() {
		clearInterval(time.intervalTime);
		setSessionStart(false);
	}

	function reloadTimer() {
		stopTimer();
		onReloadTimer();
		setTime({
			...time,
			sessionSeconds: 0,
		});
		setSession(true);
	}

	const handleSetSession = () => setSession(!session);

	useEffect(() => {
		if (sessionStart) {
			let interval = setInterval(() => {
				if (time.sessionSeconds === 0) {
					if (sessionMinutes !== 0) {
						setTime({ ...time, sessionSeconds: 59 });
						onUpdateSessionMinutes();
					} else {
						// time finish minutes 0, seconds 0, start break time
						setTime({ ...time, sessionSeconds: 0 });
						onToggle(!session);
						handleSetSession();
					}
				} else {
					setTime({ ...time, sessionSeconds: time.sessionSeconds - 1 });
				}
			}, 1000);
			return () => {
				window.clearInterval(interval);
			};
		}
	}, [time, sessionStart]);

	return (
		<section className='session-card'>
			<h3>{session === true ? 'Session' : 'Break!'}</h3>
			<div className='session-time'>
				<span>{sessionMinutes}</span>
				<span> : </span>
				<span>
					{time.sessionSeconds === 0
						? '00'
						: time.sessionSeconds < 10
						? '0' + time.sessionSeconds
						: time.sessionSeconds}
				</span>
			</div>
			<Space>
				<Button type='primary' className='button-border' onClick={startTimer}>
					Start
				</Button>
				<Button
					type='primary'
					className='button-border stop-btn'
					onClick={stopTimer}
				>
					Stop
				</Button>
				<Button type='primary' className='button-border' onClick={reloadTimer}>
					Reload
				</Button>
			</Space>
		</section>
	);
};

export default Timer;
