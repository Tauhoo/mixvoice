import React from 'react'
import PageButton from './component/PageButton'
import Container from './component/Container'
import Header from './component/Header'
import Text from './component/Text'
import styled from 'styled-components'
import MusicPlayer from './component/MusicPage/MusicPlayer'

const ButtonList = [
  { name: 'Animation', link: '/animation' },
  { name: 'Button', link: '/' },
]
const Content = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  margin: 50px 0px 30px 0px;
`
const Footer = styled.div`
  width: 100%;
  padding: 20px;
`

const MusicContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
`
const musics = [
  {
    name: 'ice',
    filename: 'ice.png',
    duration: 10,
  },
  {
    name: 'ice',
    filename: 'ice.png',
    duration: 10,
  },
  {
    name: 'ice',
    filename: 'ice.png',
    duration: 10,
  },
  {
    name: 'ice',
    filename: 'ice.png',
    duration: 10,
  },
  {
    name: 'ice',
    filename: 'ice.png',
    duration: 10,
  },
  {
    name: 'ice',
    filename: 'ice.png',
    duration: 10,
  },
  {
    name: 'ice',
    filename: 'ice.png',
    duration: 10,
  },
  {
    name: 'ice',
    filename: 'ice.png',
    duration: 10,
  },
]

export default () => {
  return (
    <Container>
      <Header>
        <Text color="#fff" size={2}>
          Music
        </Text>
      </Header>
      <Content>
        {musics.map(({ name, filename, duration }) => (
          <MusicContainer>
            <MusicPlayer filename={filename} duration={duration} />
            <Text size={1}>{name}</Text>
            <Text>{duration} s</Text>
          </MusicContainer>
        ))}
      </Content>
      <Footer>
        <PageButton pages={ButtonList} />
      </Footer>
    </Container>
  )
}
