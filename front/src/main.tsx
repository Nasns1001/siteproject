import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './css/styles.css'
import App from './App'
import React from 'react'



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
