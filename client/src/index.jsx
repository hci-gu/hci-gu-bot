import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.less'
import App from './App'

const Root = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

const rootElement = document.getElementById('root')
render(<Root />, rootElement)
