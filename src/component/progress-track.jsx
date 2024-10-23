import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Character from './character'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  width: 1400px;
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 180px;
`

const ProgressField = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 30px;
    background-color: white;
    border-radius: 20px;
    z-index: 10;
    position: relative;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`

const ProgressNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 80px;
  color: gray;
  font-weight: bold;
`

const ProgressBar = styled.div`
    width: ${({ width }) => (isNaN(width) ? 0 : width)}%;
    height: 10px;
    background-color: orange;
    border-radius: 20px;
`

const ProgressTrack = ({ totalCheckedDays, lastDay }) => {
  const [progressWidth, setProgressWidth] = useState(0);
  
  useEffect(() => {
    const progressPercentage = (totalCheckedDays / lastDay) * 100;
    setProgressWidth(progressPercentage);
  }, [totalCheckedDays, lastDay]);

  return (
    <Wrapper>
        <Character width={progressWidth} />
        <ProgressField>
            <ProgressBar width={progressWidth} />
            <ProgressNumber>
              <span>{totalCheckedDays}</span>
              <span>{lastDay}</span>
            </ProgressNumber>
        </ProgressField>
    </Wrapper>
  )
}

ProgressTrack.propTypes = {
  width: PropTypes.number,
};

export default ProgressTrack