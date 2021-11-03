import React from 'react'
import styled from 'styled-components'

import Keyboard from './components/Keyboard'
import Trackpad from './components/Trackpad'

const Container = styled.div`
  margin: 100px auto;
  width: 75%;

  display: flex;
  flex-direction: column;
`

const App = () => {
  return (
    <Container>
      <Keyboard />
      <Trackpad />
    </Container>
  )
}

export default App
