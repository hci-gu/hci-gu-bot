import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import useSocket from '../hooks/useSocket'

const Container = styled.div`
  margin-top: 1rem;
  align-self: center;
  width: 400px;
  height: 300px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #ececec;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    user-select: none;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.25);
  }
`

const debounce = (func, delay) => {
  let debounceTimer
  return function () {
    const context = this
    const args = arguments
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => func.apply(context, args), delay)
  }
}

const Trackpad = () => {
  const [, emit] = useSocket()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const onMove = useMemo(() =>
    debounce((e) => {
      var bounds = e.target.getBoundingClientRect()
      var x = (e.clientX - bounds.left) / bounds.width
      var y = (e.clientY - bounds.top) / bounds.height
      setPos({ x, y })
      emit('mouse', { x, y })
    }, 5)
  )

  useEffect(() => {
    const onMouseDown = () => emit('click')

    document.addEventListener('mousedown', onMouseDown)
    return () => {
      document.removeEventListener('mousedown', onMouseDown)
    }
  }, [emit])

  return (
    <Container onMouseMove={onMove}>
      <span>
        {pos.x.toFixed(1)}, {pos.y.toFixed(1)}
      </span>
    </Container>
  )
}

export default Trackpad
