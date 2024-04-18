import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Principal'
import { BrowserRouter } from 'react-router-dom'
import './index.css'


import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <React.StrictMode>
      <Principal />
    </React.StrictMode>
  </BrowserRouter>





)
