import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setAssetPath } from "@esri/calcite-components/dist/components"

import App from './App.jsx'


// TODO: Use local assets
// setAssetPath(window.location.href)
setAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
