import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131313;
`

export default ({ children }) => <Header>{children}</Header>
