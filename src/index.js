import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
)
