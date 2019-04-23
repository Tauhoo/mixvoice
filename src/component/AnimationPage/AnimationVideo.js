import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import AnimationPicture from './AnimationPicture'

const Container = styled.div`
  border-width: 3px;
  border-style: solid;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
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

export default function({ video, attribute }) {
  const [frame, setFrame] = useState(0)
  const [isPlay, setIsPlay] = useState(false)

  useInterval(
    () => {
      if (frame === video.length - 1) return setFrame(0)
      setFrame(frame + 1)
    },
    isPlay ? 1000 / 24 : null,
  )

  const onClick = () => setIsPlay(!isPlay)

  return (
    <Container onClick={onClick}>
      <AnimationPicture data={video[frame]} {...attribute} />
    </Container>
  )
}
