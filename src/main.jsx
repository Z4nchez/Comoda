import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CoContextProvider } from "./Context/ComodaContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoContextProvider>
      <App />
    </CoContextProvider>    
  </React.StrictMode>,
)
