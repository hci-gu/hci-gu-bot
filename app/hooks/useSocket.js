import { useMemo } from 'react'
import { io } from 'socket.io-client'
const API_URL = process.env.NEXT_PUBLIC_API_URL

const useSocket = () => {
  const socket = useMemo(() => io(API_URL))

  return [socket, () => socket.emit()]
}

export default useSocket
