import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { StyledCalendarContainer } from './styled-calendar'
import dayjs from 'dayjs';

const CalendarForm = () => {
    const [value, setValue] = useState(new Date());
    const [activeStartDate, setActiveStartDate] = useState(new Date());

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
          const selectedMonth = dayjs(activeStartDate).month();
          return date.getMonth() !== selectedMonth;
        }
        return false;
    };

    const handleActiveStartDateChange = ({ activeStartDate }) => {
        setActiveStartDate(activeStartDate);
    }

    return (
        <StyledCalendarContainer>
            <Calendar 
                onChange={setValue} 
                value={value}
                onActiveStartDateChange={handleActiveStartDateChange}
                formatDay ={(locale, date) => dayjs(date).format('DD')}
                tileDisabled={tileDisabled}
            />
        </StyledCalendarContainer>
    )
}

export default CalendarForm