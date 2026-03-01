import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './stores/context/CartContext.jsx'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
>>>>>>> 3209d7bf2d5955940a72855e6eda7b9e25bb4066

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
</BrowserRouter>
)
