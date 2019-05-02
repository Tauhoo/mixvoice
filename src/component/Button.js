import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  display: flex;
  background-color: black;
  color: #fff;
  border-width: 3px;
  border-style: solid;
  border-color: black;
  border-radius: ${({ height }) => height / 2}px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  outline: none;
  &:hover {
    color: black;
    background-color: white;
  }
`

export default props => {
  return <Container {...props} />
}
