import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProductsProvider } from './contexts/products-context/ProductsContextProvider.tsx'
import { CartProvider } from './contexts/cart-context/CartContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </CartProvider>
  </StrictMode>,
)
