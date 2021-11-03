import { useEffect, useMemo } from 'react'
import { io } from 'socket.io-client'
const API_URL = import.meta.env.VITE_API_URL

const useSocket = () => {
  const socket = useMemo(() => {
    const s = io(`${API_URL}`, { transports: ['websocket'] })
    s.on('connect', () => {
      console.log('socket connected')
      socket.emit('client-init')
    })
    s.on('disconnect', console.error)
    s.on('error', console.error)
    return s
  }, [])

  return [socket, (key, data) => socket.emit(key, data)]
}

export default useSocket
