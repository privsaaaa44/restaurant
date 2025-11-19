import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import "@fontsource/roboto-serif/400.css"; // Regular
import "@fontsource/roboto-serif/500.css"; // Medium
import "@fontsource/roboto-serif/700.css"; // Bold

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
