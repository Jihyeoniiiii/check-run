import styled from 'styled-components'
import CalendarForm from './component/calendar'
import CheckList from './component/check-list'
import { useState } from 'react'
import dayjs from 'dayjs'
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

  return (
    <Wrapper>
      <MainWrapper>
        <CalendarForm currentDay={currentDay} setCurrentDay={setCurrentDay} />
        <CheckList currentDay={currentDay}/>
      </MainWrapper>
      <ProgressTrack />
    </Wrapper>
  )
}

export default App
