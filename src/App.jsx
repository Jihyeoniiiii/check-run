import styled from 'styled-components'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import CalendarForm from './component/calendar'
import CheckList from './component/check-list'
import ProgressTrack from './component/progress-track'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-left: 250px;
  margin-right: 30px;
`

function App() {
  const [currentDay, setCurrentDay] = useState(dayjs().format('YYYY-MM-DD'));
  const [lastDay, setLastDay] = useState(dayjs().endOf('month').format('DD'));
  const [totalCheckedDays, setTotalCheckedDays] = useState(0);
  
  const currentMonth = dayjs(currentDay).format('YYYY-MM');

  const updateTotalCheckedDays = () => {
    const storedData = JSON.parse(localStorage.getItem('checklistData') || '{}');
    const monthData = storedData[currentMonth] || {};

    const checkedDays = Object.values(monthData).filter(
      (dayItems) => Array.isArray(dayItems) && dayItems.length > 0 && dayItems.every((item) => item.checked)
    ).length;

    setTotalCheckedDays(checkedDays);
  };

  useEffect(() => {
    updateTotalCheckedDays();
  }, [currentMonth, currentDay]);

  return (
    <Wrapper>
      <MainWrapper>
        <CalendarForm 
          currentDay={currentDay} 
          setCurrentDay={setCurrentDay} 
          lastDay={lastDay}
          setLastDay={setLastDay}
        />
        <CheckList currentDay={currentDay} onUpdate={updateTotalCheckedDays} />
      </MainWrapper>
      <ProgressTrack 
        currentDay={currentDay} 
        lastDay={lastDay}
        totalCheckedDays={totalCheckedDays}
      />
    </Wrapper>
  )
}

export default App
