import React from 'react'
import styled from 'styled-components'
import PixelEditor from './PixelInEditor'
const Container = styled.div`
  width: ${({ width }) => width + 4}px;
  height: ${({ height }) => height + 4}px;
  display: grid;
  grid-template-columns: repeat(${({ pixelX }) => pixelX}, 1fr);
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
`

export default ({ height, width, pixelY, pixelX, onDraw }) => {
  let data = []
  let isClick = false
  const onMouseMove = indexs => setIsCheck => () => {
    if (onDraw !== undefined) onDraw(indexs)
    if (!isClick) return
    setIsCheck(true)
  }
  return (
    <Container
      height={height}
      width={width}
      pixelY={pixelY}
      pixelX={pixelX}
      onMouseLeave={() => {
        isClick = false
      }}
      onDrag={e => e.preventDefault()}
      onMouseDown={() => {
        isClick = true
      }}
      onMouseUp={() => {
        isClick = false
      }}
    >
      {(() => {
        let result = []
        let key = 0
        for (let i = 0; i < pixelY; i++)
          for (let j = 0; j < pixelX; j++) {
            result.push(
              <PixelEditor
                key={key++}
                onMouseMove={onMouseMove([i, j])}
                height={height}
                width={width}
                pixelY={pixelY}
                pixelX={pixelX}
              />,
            )
          }
        return result
      })()}
    </Container>
  )
}
