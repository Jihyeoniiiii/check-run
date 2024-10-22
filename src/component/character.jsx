import React from 'react'
import RunIcon from '../assets/run-character.svg'
import styled from 'styled-components'

const CharacterPosition = styled.div`
  position: absolute;
  top: -100px;
  left: ${({ width }) => width}%; /* width에 따라 캐릭터 이동 */
  transform: translateX(-50%); /* 캐릭터의 중앙을 기준으로 이동 */
  transition: left 0.3s ease-in-out;
`

const Character = ({ width }) => {
  return (
    <CharacterPosition width={width}>
      <img src={RunIcon} width={100} height={100} />
    </CharacterPosition>
  )
}

export default Character