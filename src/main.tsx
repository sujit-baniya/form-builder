import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import '~/css/index.css'
import 'virtual:windi-utilities.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
