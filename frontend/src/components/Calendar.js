import React, { useMemo } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { add, endOf } from 'date-arithmetic';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);

const CalendarApp = () => {
	const { defaultDate, max, views } = useMemo(
		() => ({
			defaultDate: new Date(2023, 1, 1),
			max: add(endOf(new Date(2023, 1, 1), 'day'), -1, 'hours'),
			views: Object.keys(Views).map((k) => Views[k]),
		}),
		[]
	);

	return (
		<section style={{ padding: '20px 70px' }}>
			<h2>Calendar</h2>
			<Calendar
				style={{ marginTop: 20 }}
				defaultDate={defaultDate}
				localizer={localizer}
				max={max}
				showMultiDayTimes
				step={60}
				views={views}
			/>
		</section>
	);
};

export default CalendarApp;
