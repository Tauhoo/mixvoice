import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`

export default ({ children }) => <Container>{children}</Container>
