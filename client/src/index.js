import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* The various pages will be displayed by the `Main` component. */}
    </BrowserRouter>
  </React.StrictMode>,
);