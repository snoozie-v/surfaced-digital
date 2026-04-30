import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!

// In production the root is pre-rendered; hydrate it.
// In dev it's empty; use createRoot as normal.
if (rootElement.innerHTML) {
  hydrateRoot(rootElement, <StrictMode><App /></StrictMode>)
} else {
  createRoot(rootElement).render(<StrictMode><App /></StrictMode>)
}
