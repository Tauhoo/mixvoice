import React, { useEffect, useState } from 'react'
import MusicButton from './MusicButton'
import styled from 'styled-components'
import { getFrez } from '../../utilise/request'
import { get } from 'https'

const Container = styled.div`
  padding: 80px;
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 80px;
  justify-items: center;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 460px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const list = (amount, frezs) => {
  let list = []
  for (let number = 1; number <= amount; number++)
    list.push(
      <MusicButton number={number} key={number} Frez={frezs[number - 1]} />,
    )
  return list
}

export default ({ amount }) => {
  const [frezs, setFrezs] = useState(new Array(11).fill(0))
  useEffect(async () => {
    let { status, result } = await getFrez()
    console.log(result)
    setFrezs(result.list)
  }, [])
  return (
    <Container>
      <List>{list(amount, frezs)}</List>
    </Container>
  )
}
