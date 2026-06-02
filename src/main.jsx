import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero1 from "./Components/Hero1.jsx"
import Middle from "./Components/Middle.jsx"
import Feature from "./Components/FeatureShowcase.jsx"
import WhyChooseStulo from "./Components/WhyChooseStulo";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hero1 />
    <Middle />
    <Feature />
    <WhyChooseStulo />
  </StrictMode>,
)
