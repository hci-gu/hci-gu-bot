import React, { useEffect } from 'react'
import SimpleKeyBoard from 'simple-keyboard'
import styled from 'styled-components'
import useSocket from '../hooks/useSocket'
import 'simple-keyboard/build/css/index.css'

const Container = styled.div``

const Keyboard = () => {
  const [, emit] = useSocket()
  useEffect(() => {
    const onKey = (e) => {
      emit('key', e)
    }

    const keyboard = new SimpleKeyBoard({
      physicalKeyboardHighlight: true,
      onKeyPress: (button) => onKey(button),
    })
  }, [])

  return (
    <Container>
      <div className="simple-keyboard" />
    </Container>
  )
}

export default Keyboard
