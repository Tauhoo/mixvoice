import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Pixel = styled.div`
  background-color: ${({ isCheck }) => (isCheck ? 'black' : 'white')};
  width: ${({ width, pixelX }) => width / pixelX}px;
  height: ${({ height, pixelY }) => height / pixelY}px;
`
//{ onHover, width, height, pixelY, pixelX, color }
export default ({
  onMouseMove,
  width,
  height,
  pixelY,
  pixelX,
  color,
  isChange,
}) => {
  const [isCheck, setIsCheck] = useState(color)

  useEffect(() => {
    if (!isChange) setIsCheck(color)
  })

  return (
    <Pixel
      isCheck={isCheck}
      width={width}
      height={height}
      pixelY={pixelY}
      pixelX={pixelX}
      onDrag={e => e.preventDefault()}
      onMouseMove={onMouseMove(setIsCheck)}
    />
  )
}
