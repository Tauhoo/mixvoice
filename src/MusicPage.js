import React, { useState, useEffect } from 'react'
import PageButton from './component/PageButton'
import Container from './component/Container'
import Header from './component/Header'
import Text from './component/Text'
import styled from 'styled-components'
import MusicPlayer from './component/MusicPage/MusicPlayer'
import { uploadSound, getSoundList } from './utilise/request'
import { Upload, Icon } from 'antd'

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
  justify-items: center;
`
const Footer = styled.div`
  width: 100%;
  padding: 20px;
`
const UploadPad = styled.div`
  display: flex;
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  transition: 0.3s;
  &:hover {
    font-size: 40px;
  }
`

const MusicContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
`

export default () => {
  const [musics, setMusics] = useState([])
  useEffect(async () => {
    let { status, result } = await getSoundList()
    setMusics(result)
  }, [])

  const customRequest = ({ file, onSuccess }) => {
    setTimeout(async () => {
      onSuccess('ok')
      if (file.type !== 'audio/wav') return
      let data = { currentPath: file.path, filename: file.name }
      let { status } = await uploadSound(data)
      if (status !== 'success') return
      setMusics([...musics, file.name])
    }, 0)
  }
  return (
    <Container>
      <Header>
        <Text color="#fff" size={2}>
          Music
        </Text>
      </Header>
      <Content>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          customRequest={customRequest}
        >
          <UploadPad>
            <Icon type="plus" />
          </UploadPad>
        </Upload>
        {musics.map(filename => (
          <MusicContainer>
            <MusicPlayer filename={filename} />
            <Text size={1}>{filename}</Text>
          </MusicContainer>
        ))}
      </Content>
      <Footer>
        <PageButton pages={ButtonList} />
      </Footer>
    </Container>
  )
}
