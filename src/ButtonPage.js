import React from 'react'
import Text from './component/Text'
import MusicButtonList from './component/ButtonPage/MusicButtonList'
import Container from './component/Container'
import Header from './component/Header'
import styled from 'styled-components'

const ButtonList = [
  { name: 'Animation', link: '/animation' },
  { name: 'Music', link: '/music' },
]
const Content = styled.div`
  width: 100%;
`
const Footer = styled.div`
  width: 100%;
`
export default () => {
  return (
    <Container>
      <Header>
        <Text color="#fff" size={2}>
          Button
        </Text>
      </Header>
      <Content>
        <MusicButtonList amount={11} />
      </Content>
    </Container>
  )
}
