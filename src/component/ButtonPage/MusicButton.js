import React from 'react'
import styled from 'styled-components'
import Text from '../Text'

const Container = styled.div`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #949aa8;
  transition: 0.3s;
  &:hover {
    background-color: #c0d1e5;
    transform: scale(1.2);
    border-color: #c0d1e5;
  }
  border-width: 2px;
  border-style: solid;
  border-color: #131313;
`

export default ({ number }) => (
  <Container>
    <Text color="#fff" size={2}>
      {number}
    </Text>
  </Container>
)
