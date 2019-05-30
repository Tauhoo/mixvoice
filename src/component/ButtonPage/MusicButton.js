import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Text from '../Text'
import { Modal, Col, Row, InputNumber, Slider } from 'antd'
import { uploadFrez } from '../../utilise/request'

const names = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', '#', 0]

const Container = styled.div`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #949aa8;
  transition: 0.3s;
  &:hover {
    background-color: #c0d1e5;
    transform: scale(1.2);
    border-color: #c0d1e5;
  }
  border-width: 2px;
  border-style: solid;
  border-color: #131313;
`

export default ({ number, Frez }) => {
  const [visible, setVisible] = useState(false)
  const [frez, setFrez] = useState(Frez)
  useEffect(() => setFrez(Frez), [Frez])
  const onOk = async () => {
    let result = await uploadFrez({ number, frez }).then(res => res)
    setVisible(false)
  }
  if (number === 11) return <></>
  return (
    <>
      <Modal
        title={`Set up button NO.${number}`}
        onOk={onOk}
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <Row>
          <Col span={12}>
            <Slider
              min={0}
              max={3000}
              onChange={value => setFrez(value)}
              value={typeof frez === 'number' ? frez : 0}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={0}
              max={3000}
              style={{ marginLeft: 16 }}
              value={frez}
              onChange={value => setFrez(value)}
            />
          </Col>
        </Row>
      </Modal>
      <Container onClick={() => setVisible(true)}>
        <Text color="#fff" size={2}>
          {names[number - 1]}
        </Text>
      </Container>
    </>
  )
}
