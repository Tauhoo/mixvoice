import React, { useState, useRef, useEffect } from 'react'
import { Progress, Icon } from 'antd'
import styled from 'styled-components'

const ProgressEdited = styled(Progress)`
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  })

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default () => {
  const [isPlay, setIsPlay] = useState(false)
  const [percent, setPercent] = useState(0)

  useInterval(
    () => {
      if (percent + 1 >= 100) {
        setIsPlay(false)
        setPercent(0)
        return
      }
      setPercent(percent + 1)
    },
    isPlay ? 1000 / 24 : null,
  )

  const onClick = () => {
    setIsPlay(!isPlay)
  }

  return (
    <ProgressEdited
      type="circle"
      percent={percent}
      width={100}
      strokeColor="black"
      format={() =>
        isPlay ? (
          <Icon type="pause" style={{ fontSize: '36px' }} />
        ) : (
          <Icon
            type="caret-right"
            style={{
              fontSize: '36px',
            }}
          />
        )
      }
      onClick={onClick}
    />
  )
}
