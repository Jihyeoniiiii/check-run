import styled from 'styled-components'
import CalendarForm from './component/calendar'
import CheckList from './component/check-list'
import { useState } from 'react'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const CalendarWrapper = styled.div`
  padding: 100px;
`

function App() {
  const [currentDay, setCurrentDay] = useState(new Date());

  return (
    <Wrapper>
      <CalendarWrapper>
      <CalendarForm currentDay={currentDay} setCurrentDay={setCurrentDay} />
      </CalendarWrapper>
        <CheckList currentDay={currentDay}/>
    </Wrapper>
  )
}

export default App
