import React, { useState } from 'react'
import Calendar from 'react-calendar'
import dayjs from 'dayjs';

import { StyledCalendarContainer } from './styled-calendar'

const CalendarForm = ({ currentDay, setCurrentDay, setLastDay }) => {
    const today = dayjs().startOf('day');
    const [value, setValue] = useState(new Date());
    const [activeStartDate, setActiveStartDate] = useState(new Date());
    const [markedDate, setMarkedDate] = useState(today);

    const handleActiveStartDateChange = ({ activeStartDate, view }) => {
        if( view === 'month'){
            const lastDay = dayjs(activeStartDate).endOf('month').format('DD');
            setLastDay(lastDay);
        }
        setActiveStartDate(activeStartDate);
    }

    const handleDateClick = (date) => {
        const formattedDate = dayjs(date).format('YYYY-MM-DD');
        setCurrentDay(formattedDate);
        setMarkedDate(dayjs(date).startOf('day'));
        setValue(date);
    }

    const isMarked = (date) => {
        return markedDate && markedDate.isSame(dayjs(date).startOf('day'), 'day');
    };

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
          const selectedMonth = dayjs(activeStartDate).month();
          return date.getMonth() !== selectedMonth;
        }
        return false;
    };

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
                formatDay ={(locale, date) => dayjs(date).format('DD')}
                onActiveStartDateChange={handleActiveStartDateChange} 
                onClickDay={handleDateClick}
                tileDisabled={tileDisabled}
                tileClassName={tileClassName}
            />
        </StyledCalendarContainer>
    )
}

export default CalendarForm