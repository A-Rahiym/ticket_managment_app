import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/globals.css'
import { AuthProvider } from './context/AuthContext.tsx'
import { TicketProvider } from './context/TicketContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TicketProvider>
          <App />
        </TicketProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
