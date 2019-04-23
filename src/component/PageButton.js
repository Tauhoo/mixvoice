import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Text from './Text'

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Button = styled.div`
  width: 300px;
  height: 50px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  margin: 3px;
  border-radius: ${({ layout }) =>
    `${layout ? 0 : 50}px ${layout ? 50 : 0}px ${layout ? 50 : 0}px ${
      layout ? 0 : 50
    }px`};
  &:hover {
    background-color: #949aa8;
  }
`

export default ({ pages }) => (
  <Container>
    <Link to={pages[0].link}>
      <Button layout={0}>
        <Text color="#fff">{pages[0].name}</Text>
      </Button>
    </Link>
    <Link to={pages[1].link}>
      <Button layout={1}>
        <Text color="#fff">{pages[1].name}</Text>
      </Button>
    </Link>
  </Container>
)
