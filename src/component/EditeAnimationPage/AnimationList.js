import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AnimationPicture from '../AnimationPage/AnimationPicture'
import { Icon } from 'antd'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`
const AddPicture = styled.div`
  height: 100px;
  width: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 36px;
  transition: 0.3s;
  &:hover {
    font-size: 50px;
    transform: rotate(360deg);
  }
`

export default ({ onClickParent, onAddParent, pictureListParent }) => {
  const [pictureList, updatePicture] = useState(pictureListParent)
  const onClick = number => () => onClickParent(number)
  const onAdd = () => onAddParent(pictureList, updatePicture)

  useEffect(() => updatePicture(pictureListParent))

  return (
    <Container>
      <AddPicture onClick={onAdd}>
        <Icon type="plus-circle" />
      </AddPicture>
      {pictureList.map((data, index) => (
        <AnimationPicture
          onClick={onClick(index)}
          height={100}
          width={100}
          pixelY={data.length}
          pixelX={data[0].length}
          data={data}
        />
      ))}
    </Container>
  )
}
