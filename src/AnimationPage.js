import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Container from './component/Container'
import Header from './component/Header'
import Text from './component/Text'
import PageButton from './component/PageButton'
import AnimationVideo from './component/AnimationPage/AnimationVideo'
import { registerAnimation, getAllAnimation } from './utilise/request'
import { Icon, Modal, Input } from 'antd'
import { Link } from 'react-router-dom'

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  margin: 50px 0px 30px 0px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
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

const AddAnimation = styled.div`
  height: 200px;
  width: 200px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: white;
  transition: 0.3s;
  &:hover {
    font-size: 70px;
  }
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
]

const ButtonList = [
  { name: 'Button', link: '/' },
  { name: 'Music', link: '/music' },
]

export default () => {
  const [visible, setVisible] = useState(false)
  const [videos, setVideos] = useState(videoss)
  const [name, setName] = useState('')

  useEffect(async () => {
    let { status, result } = await getAllAnimation()
    let newVideos = result.map(({ animation, name }) => ({
      attribute: { name, duration: (animation.length * 24) / 60 },
      video: {
        attribute: {
          pixelX: 7,
          pixelY: 5,
          width: 200,
          height: 200,
        },
        video: animation,
      },
    }))
    setVideos(newVideos)
  }, [])

  const onChangeName = ({ target }) => setName(target.value)
  const onRegister = async () => {
    const newArray = [[...new Array(5)].map(e => Array(7).fill(false))]
    const json = JSON.stringify({
      animation: newArray,
    })

    let { status, result, detail } = await registerAnimation({ json, name })
    if (status !== 'success') return
    setVideos([
      ...videos,
      {
        attribute: { name, duration: 1 / 24 },
        video: {
          attribute: {
            pixelX: 7,
            pixelY: 5,
            width: 200,
            height: 200,
          },
          video: newArray,
        },
      },
    ])
  }

  return (
    <Container>
      <Modal
        title="New animation"
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={onRegister}
      >
        <Input placeholder="name" onChange={onChangeName} />
      </Modal>
      <Header>
        <Text color="#fff" size={2}>
          Animation
        </Text>
      </Header>
      <Content>
        <AddAnimation onClick={() => setVisible(true)}>
          <Icon type="plus-circle" />
        </AddAnimation>
        {videos.map(({ attribute, video }) => (
          <VideoContainer>
            <Link to="/animation/editor">
              <AnimationVideo {...video} />
              <Text size={1}>{attribute.name}</Text>
              <br />
              <Text>{attribute.duration} sec</Text>
            </Link>
          </VideoContainer>
        ))}
      </Content>
      <Footer>
        <PageButton pages={ButtonList} />
      </Footer>
    </Container>
  )
}
