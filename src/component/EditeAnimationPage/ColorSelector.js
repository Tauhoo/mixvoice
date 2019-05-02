import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: ${({ color }) => (color ? 'white' : 'black')};
  border-radius: 50%;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  transition: 0.3s;
`

export default ({ onClickProps }) => {
  const [isCheck, setIsCheck] = useState(false)
  const onClick = () => {
    if (onClickProps !== undefined) onClickProps(!isCheck)
    setIsCheck(!isCheck)
  }
  return (
    <Container color={isCheck} onClick={onClick}>
      <Icon
        type="bg-colors"
        style={{ color: isCheck ? 'black' : 'white', fontSize: '20px' }}
      />
    </Container>
  )
}
