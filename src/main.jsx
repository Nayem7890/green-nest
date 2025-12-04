import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes/Router.jsx'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  </StrictMode>,
)
