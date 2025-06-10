import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

console.log('✅ main.jsx is executing...')

const rootElement = document.getElementById('root')
if (rootElement) {
  console.log('✅ Root element found, creating React root...')
  const root = createRoot(rootElement)
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
  console.log('✅ React render completed')
} else {
  console.error('❌ Root element not found!')
}
