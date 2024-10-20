import React from 'react'
import styled from 'styled-components'
import Character from './character'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 180px;
`

const ProgressField = styled.div`
    width: 1500px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    margin: 10px;
    z-index: 10;
    position: relative;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`

const ProgressBar = styled.div`
    width: 95%;
    height: 10px;
    background-color: orange;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const ProgressTrack = () => {
  return (
    <Wrapper>
        <Character />
        <ProgressField>
            <ProgressBar />
        </ProgressField>
    </Wrapper>
  )
}

export default ProgressTrack