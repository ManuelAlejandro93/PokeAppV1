import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PokeApp } from './PokeApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokeApp />
  </StrictMode>
);
