import React, { useState } from 'react'
import Header from './component/Header'
import Container from './component/Container'
import Text from './component/Text'
import Editor from './component/EditeAnimationPage/Editor'
import ColorSelector from './component/EditeAnimationPage/ColorSelector'
import AnimationList from './component/EditeAnimationPage/AnimationList'
import Button from './component/Button'
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`
const Snapshot = styled.div`
  height: 350px;
  background-color: black;
  border-width: 2px;
  border-style: solid;
  border-color: gray;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: black;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: min-content;
  grid-gap: 20px;
`
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
`

const pixel = { x: 7, y: 5 }
const getDatas = [[...new Array(pixel.y)].map(e => Array(pixel.x).fill(false))]
export default () => {
  const [color, setColor] = useState(true)
  const [datas, setDatas] = useState(getDatas)
  const [currentIndex, setCurrentIndex] = useState({
    index: 0,
    isChange: true,
  })
  let board = datas[currentIndex.index] //[...new Array(pixel.y)].map(e => Array(pixel.x).fill(false))
  //console.log(datas[currentIndex])

  const onChangeColor = color => setColor(!color)

  const onDraw = ([y, x]) => {
    //color false = white, true = black
    board[y][x] = color
  }

  const onSave = async () => {
    let datasCopy = [...datas]
    datasCopy[currentIndex] = board
    setDatas(datasCopy)
  }

  const addPicture = (pictureList, updatePicture) => {
    const newDatas = [
      ...pictureList,
      [...new Array(pixel.y)].map(e => Array(pixel.x).fill(false)),
    ]
    updatePicture(newDatas)
    setDatas(newDatas)
  }

  const onChangePicture = number => {
    setCurrentIndex({ index: number, isChange: false })
  }
  let { index, isChange } = currentIndex
  //console.log(index, isChange)

  return (
    <Container>
      <Header>
        <Text size={2} color="#fff">
          Create Animation
        </Text>
      </Header>
      <Content>
        <EditorContainer>
          <Snapshot>
            <AnimationList
              onClickParent={onChangePicture}
              onAddParent={addPicture}
              pictureListParent={datas}
            />
          </Snapshot>
          <Editor
            height={350}
            width={350}
            pixelY={pixel.y}
            pixelX={pixel.x}
            color={color}
            datas={datas[currentIndex.index]}
            isChange={currentIndex.isChange}
            updateChangePage={setCurrentIndex}
            index={index}
            onDraw={onDraw}
          />
          <Button onClick={onSave} width={100} height={40}>
            save
          </Button>
          <ColorSelector onClickProps={onChangeColor} />
        </EditorContainer>
      </Content>
    </Container>
  )
}
