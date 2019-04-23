import React from 'react'
import Header from './component/Header'
import Container from './component/Container'
import Text from './component/Text'
import Editor from './component/EditeAnimationPage/Editor'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
`

export default () => (
  <Container>
    <Header>
      <Text size={2} color="#fff">
        Create Animation
      </Text>
    </Header>
    <Content>
      <Editor height={200} width={200} pixelY={10} pixelX={10} />
    </Content>
  </Container>
)
