import styled from 'styled-components'
import CalendarForm from './component/calendar'
import CheckList from './component/check-list'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const CalendarWrapper = styled.div`
  padding: 100px;
`

function App() {
  return (
    <Wrapper>
      <CalendarWrapper>
        <CalendarForm />
      </CalendarWrapper>
        <CheckList />
    </Wrapper>
  )
}

export default App
