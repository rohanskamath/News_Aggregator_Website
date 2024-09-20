import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NewsProvider } from './Context/NewsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </StrictMode>,
)
