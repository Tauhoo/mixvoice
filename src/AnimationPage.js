import React from 'react'
import styled from 'styled-components'
import Container from './component/Container'
import Header from './component/Header'
import Text from './component/Text'
import PageButton from './component/PageButton'
import AnimationVideo from './component/AnimationPage/AnimationVideo'

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  margin: 50px 0px 30px 0px;
  grid-template-columns: repeat(4, 1fr);
`
const Footer = styled.div`
  width: 100%;
  padding: 20px;
`

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  justify-items: center;
`

const props = {
  attribute: {
    pixelX: 7,
    pixelY: 5,
    width: 200,
    height: 200,
  },
  video: [
    [
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0],
    ],
  ],
}

const videoss = [
  {
    attribute: {
      name: 'ice',
      duration: 3,
    },
    video: props,
  },
  {
    attribute: {
      name: 'ice',
      duration: 3,
    },
    video: props,
  },
  {
    attribute: {
      name: 'ice',
      duration: 3,
    },
    video: props,
  },
  {
    attribute: {
      name: 'ice',
      duration: 3,
    },
    video: props,
  },
  {
    attribute: {
      name: 'ice',
      duration: 3,
    },
    video: props,
  },
  {
    attribute: {
      name: 'ice',
      duration: 3,
    },
    video: props,
  },
]

const ButtonList = [
  { name: 'Button', link: '/' },
  { name: 'Music', link: '/music' },
]

export default ({ videos }) => (
  <Container>
    <Header>
      <Text color="#fff" size={2}>
        Animation
      </Text>
    </Header>
    <Content>
      {videoss.map(({ attribute, video }) => (
        <VideoContainer>
          <AnimationVideo {...video} />
          <Text size={1}>{attribute.name}</Text>
          <Text>{attribute.duration} sec</Text>
        </VideoContainer>
      ))}
    </Content>
    <Footer>
      <PageButton pages={ButtonList} />
    </Footer>
  </Container>
)
