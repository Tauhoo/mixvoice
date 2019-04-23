import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: grid;
  grid-template-columns: repeat(${({ pixelX }) => pixelX}, 1fr);
  div {
    height: ${({ pixelY, height }) => height / pixelY}px;
    width: ${({ pixelX, width }) => width / pixelX}px;
  }
`

const Pixel = styled.div`
  background-color: ${({ mark }) => (mark ? 'black' : 'white')};
`

const render = data => {
  let result = []
  let index = 0
  for (let row of data)
    for (let pixel of row) result.push(<Pixel key={index++} mark={pixel} />)
  return result
}

export default ({ height, width, data, pixelX, pixelY }) => (
  <Container height={height} width={width} pixelX={pixelX} pixelY={pixelY}>
    {render(data)}
  </Container>
)
