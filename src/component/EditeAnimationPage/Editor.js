import React, { useEffect } from 'react'
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

export default ({
  height,
  width,
  pixelY,
  pixelX,
  onDraw,
  color,
  datas,
  isChange,
  updateChangePage,
  index,
}) => {
  let isClick = false
  let ink = color

  useEffect(() => {
    ink = color
  })
  if (!isChange) updateChangePage({ index, isChange: true })

  const onMouseMove = indexs => (setIsCheck, key) => () => {
    if (!isClick) return
    if (onDraw !== undefined) onDraw(indexs)

    setIsCheck(ink)
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
        //console.log(datas)
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
                color={datas[i][j]}
                isChange={isChange}
              />,
            )
          }
        return result
      })()}
    </Container>
  )
}
