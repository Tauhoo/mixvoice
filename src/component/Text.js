import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  color: ${({ color }) => color || '#131313'};
  font-family: 'Maven Pro';
  font-size: ${({ size }) => size};
`

export default ({ size, color, children }) => {
  const sizeConvert = ['16px', '20px', '36px', '72px']
  return (
    <Container color={color} size={sizeConvert[size || '16px']}>
      {children}
    </Container>
  )
}
