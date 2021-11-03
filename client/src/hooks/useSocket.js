import { useEffect, useMemo } from 'react'
import { io } from 'socket.io-client'
const API_URL = import.meta.env.VITE_API_URL

const useSocket = () => {
  const socket = useMemo(() => io(API_URL))

  return [socket, () => socket.emit()]
}

export default useSocket
