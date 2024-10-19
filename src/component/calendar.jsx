import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { StyledCalendarContainer } from './styled-calendar'
import dayjs from 'dayjs';

const CalendarForm = ({ currentDay, setCurrentDay }) => {
    const today = dayjs().startOf('day');
    const [value, setValue] = useState(new Date());
    const [activeStartDate, setActiveStartDate] = useState(new Date());
    const [markedDate, setMarkedDate] = useState(today);

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
          const selectedMonth = dayjs(activeStartDate).month();
          return date.getMonth() !== selectedMonth;
        }
        return false;
    };

    const handleDateClick = (date) => {
        const formattedDate = dayjs(date).format('YYYY-MM-DD');
        setCurrentDay(formattedDate);
        setMarkedDate(dayjs(date).startOf('day'));
        setValue(date);
    }

    const isMarked = (date) => {
        return markedDate && markedDate.isSame(dayjs(date).startOf('day'), 'day');
    };

    const handleActiveStartDateChange = ({ activeStartDate }) => {
        setActiveStartDate(activeStartDate);
        setValue(date);
    }

    const tileClassName = ({ date, view }) => {
        if (view === 'month' && isMarked(date)) {
            return 'marked';
        }
        return null;
    };

    return (
        <StyledCalendarContainer>
            <Calendar 
                onChange={(date) => setCurrentDay(dayjs(date).format('YYYY-MM-DD'))}
                value={dayjs(currentDay).toDate()}
                onActiveStartDateChange={handleActiveStartDateChange}
                formatDay ={(locale, date) => dayjs(date).format('DD')}
                tileDisabled={tileDisabled}
                onClickDay={handleDateClick}
                tileClassName={tileClassName}
            />
        </StyledCalendarContainer>
    )
}

export default CalendarForm