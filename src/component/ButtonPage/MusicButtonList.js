import React from 'react'
import MusicButton from './MusicButton'
import styled from 'styled-components'

const Container = styled.div`
  padding: 80px;
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 80px;
  justify-items: center;
`

const list = amount => {
  let list = []
  for (let number = 1; number <= amount; number++)
    list.push(<MusicButton number={number} key={number} />)
  return list
}

export default ({ amount }) => (
  <Container>
    <List>{list(amount)}</List>
  </Container>
)
