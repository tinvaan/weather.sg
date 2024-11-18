import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setAssetPath } from "@esri/calcite-components/dist/components"

import "@esri/calcite-components/dist/calcite/calcite.css"
import App from './App.jsx'


setAssetPath(window.location.href)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
