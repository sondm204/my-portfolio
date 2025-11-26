import './style.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Portfolio } from './Portfolio';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
)

