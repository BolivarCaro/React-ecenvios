import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { EcenviosApp } from './EcenviosApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <EcenviosApp />
      </BrowserRouter>
    </Provider>


  </StrictMode>,
)
