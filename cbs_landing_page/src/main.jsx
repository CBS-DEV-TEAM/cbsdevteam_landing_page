import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IndexPage from './pages/IndexPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexPage />
  </StrictMode>,
)
