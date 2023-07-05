import './style.css'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Router, Route, Switch, Link } from 'wouter';
import { Analytics } from '@vercel/analytics/react';

const root = createRoot(document.querySelector('#root'))

root.render(
  <>
    <Router>
      <App />
      <Analytics />
    </Router>
  </>
)
